# 38. 브라우저의 렌더링 과정

- 브라우저가 HTML, CSS, Javascript로 작성된 텍스트 문서를 어떻게 파싱(해석)하여
  브라우저에 렌더링하는지 살펴보자

  - 파싱(syntax analysis) : 문자의 문자열을 토큰으로 분해(lexical analysis)하고,
    파스 트리를 생성하는 일련의 과정.
    파싱이 완료된 이후에는 파스트리를 기반으로 중간언어인(바이트 코드)를 생성하고 실행한다.
    - 38.6절, 자바스크립트 파싱과 실행에서 자세히 살펴보자
  - 렌더링 : HTML, CSS, JS로 작성된 문서를 파싱하여 부라우저에 시각적으로 출력하는 것

- 브라우저 렌더링 과정
  - 1. HTML, CSS, JS, 이미지, 폰트 파일 등 렌더링에 필요한 리소스를 요청하고 서버로부터 응답을 받는다
  - 2. 브라우저의 렌더링 엔진은 서버로부터 응답된 HTML과 CSS를 파싱하여 DOM과 CSSOM을 생성하고 이들을 결합하여 렌더 트리를 생성한다
  - 3. 브라우저의 자바스크립트 엔진은 서버로부터 응답된 자바스크립트를 파싱하여
    - AST(Abstract Syntax Tree)를 생성하고
      바이트 코드로 변환하여 실행한다.
    - 이때 자바스크립트는 DOM API를 통해 DOM이나 CSSOM을 변경할 수 있다.
      변경된 DOM과 CSSOM은 다시 렌더 트리로 결합된다
  - 4. 렌더 트리를 기반으로 HTML요소의 레이아웃(위치와 크기)을 계산하고 브라우저 화면에 HTML요소를 페인팅한다

## 38.1 요청과 응답

- 브라우저

  - 필요한 리소스를 요청
    - HTML, CSS, JS, 이미지, 폰트 등
  - 요청을 위한 주소창 제공
    - URL호스트 이름이 DNS를 통해 IP주소로 변환되고
      이 IP주소를 갖는 서버에게 요청을 전송한다
    - 요청은 주소창 뿐만 아니라 자바스크립트 AJAX를 통해서도 가능하다
      - 43장 AJAX / 44장 REST API에서 자세히 살펴볼 예정

- 렌더링 과정
  - 브라우저의 URL을 통해 웹페이지 접속
  - index.html다운
  - index.html에 포함되어 있는 css, js도 같이 다운
  - DOM, CSSOM 생성, 자바스크립트 파싱
  - 자바스크립트에 필요 시 DOM 조작
  - 변경된 DOM과 CSSOM은 다시 렌더 트리로 결합
  - 렌더 트리를 기반으로 HTML요소의 레이아웃(위치와 크기)을 계산하고 브라우저 화면에 HTML요소를 페인팅

## 38.2 HTTP 1.1과 HTTP 2.0

- HTTP는 웹에서 브라우저와 서버가 통신하기 위한 프로토콜(규약)이다.
- HTTP1.1 과 2의 차이를 간략히 살펴보자

#### HTTP/1.1

- HTTP/1.1은 기본적으로 커넥션 당 하나의 요청과 응답만 처리
- 여러개의 요청을 한번에 전송할 수 없고 응답 또한 마찬가지다
  - e.g., HTML문서 내에 포함된 여러개의 리소스 요청
    - CSS파일을 로드하는 link태그
    - img 태그
    - script 태그
    - 각각 개별적으로 전송되고 응답 또한 개별적으로 전송된다
  - 요청할 리소스의 개수에 비례하여 응답 시간도 증가하는 단점이 있다

#### HTTP/2

- 커넥션당 여러개의 요청과 응답이 가능하다
- 참고 : https://web.dev/performance-http2/

## 38.3 HTML 파싱과 DOM 생성

- 아래와 같은 index.html이 서버로 부터 응답되었다고 가정해보자

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Document</title>
  </head>
  <body>
    <ul>
      <li id="apple">Apple</li>
      <li id="banana">Banana</li>
      <li id="orange">Orange</li>
    </ul>
    <script src="app.js"></script>
  </body>
</html>
```

- 브라우저의 렌더링 엔진은 HTML문서를 파싱하여 `브라우저가 이해할 수 있는` **자료구조**인 DOM(Document Object Model)을 생성한다
  - 바이트 : 101110101010
  - 문자 : `<html><head>...</html>`
  - 토큰 : { startTag: 'html', contents: {...}, endTag: 'html'}
  - 노드 : html, head, meta, link, body, ...
  - DOM

1. 서버에 존재하던 HTML 파일이 브라우저의 요청에 의해 응답 됨
   이때 서버는 브라우저가 요청한 HTML파일을 읽어 들여 메모리에 저장한 다음(요청을 저장하는 것을 말하는건가? 로그를 남기거나 커넥션을 유지?)
   메모리에 저장된 바이트(2진수)를 인터넷을 경유하여 응답
2. 브라우저는 서버가 응답한 HTML문저를 바이트(2진수) 형태로 응답받는다

- 응답된 바이트 형태의 HTML문서는 meta태그의 charset 어트리뷰트에 의해 지정된 인코딩 방식(UTF-8)을 기준으로 문자열로 변환된다

3. 문자열로 변환된 HTML문서를 읽어들여 문법적 의미를 갖는 코드의 최소단위인 토큰(token)들로 분해한다
4. 각 토큰들을 객체로 변환하여 노드(node)들을 생성한다.

- 토큰의 내용에 따라 문서노드, 요소노드, 어트리뷰트노드, 텍스트 노드가 생성된다.
- 노드는 이후 DOM을 구성하는 기본 요소가 된다

5. HTML 문서는 HTML요소들의 집합으로 이루어지며 `HTML요소는 중첩 관계`를 갖는다

- 즉, HTML요소의 콘텐츠 영역 - 시작태그와 종료 태그 사이 - 에는 텍스트 뿐만 아니라 다른 HTML 요소도 포함된다
- 이러한 HTML요소들간 부자관계를 반영하여 모든 노드들을 `트리 자료구조`로 구성한다
- 이 노드들로 구성된 트리 자료구조를 DOM(Document Object Model)이라 부른다

즉, DOM은 HTML문서를 파싱한 결과물이다

## 38.4 CSS 파싱과 CSSOM 생성

- CSSOM : CSS Object Model
- 렌더링 엔진은 HTML을 처음부터 한 줄씩 순차적으로 파싱하여 DOM을 생성해 나간다.
- DOM을 생성해 나가다가 CSS를 로드하는 link 태그나 style태그를 만나면 DOM생성을 일시 중단한다
- 그리고 link태그의 href어트리뷰트에 지정된 CSS파일을 서버에 요청하여
  - 로드한 CSS파일이나 style태그 내의 CSS를 HTML과 동일한 파싱과정을 거쳐 해석하여 CSSOM을 생성한다
    - 파싱과정 : 바이트 -> 문자 -> 토큰 -> 노드 -> CSSOM
- CSS파싱을 완료하면 HTML파싱이 중단된 지점부터 다시 HTML을 파싱하기 시작하여 DOM 생성을 재개한다
- CSSOM은 CSS의 상속을 반영하여 생성된다

## 38.5 렌더 트리 생성

- DOM과 CSSOM은 렌더링을 위해 렌더트리(render tree)로 결합된다
  - 렌더링을 위한 트리구조의 자료구조
    - 브라우저 화면에 렌더링 되지 않는 노드와 CSS에 의해 표시되지 않는 노드들은 포함되지 않는다
      - HTML : meta, script태그 등
      - CSS : display: none
- 완성된 렌더 트리는 각 HTML요소의 레이아웃(위치와 크기)을 계산하는 데 사용되며
  브라우저 화면에 픽셀을 렌더링하는 페인팅(painting)처리에 입력된다

  - DOM + CSSOM => Render tree -> Layout -> Paint

- 브라우저의 렌더링 과정은 반복해서 실행될 수 있다

  - 다음의 경우 반복해서 레이아웃 계산과 페인팅이 재차 실행된다
    - 자바스크립트에 의한 노드 추가 또는 삭제
    - 브라우저 창의 리사이징에 의한 뷰포트 크기 변경
    - HTML요소의 레이아웃(위치, 크기)에 변경을 발생 시키는 스타일 변경
      - width, height
      - margin, padding
      - border
      - display, position
      - top/right/bottom/left 등

- 레이아웃 계산과 페인팅을 다시 실행하는 리렌더링은 비용이 많이드는(성능에 악영향을 주는) 작업이다
- 따라서 가급적 리렌더링이 빈벅하게 발생하지 않도록 주의할 필요가 있다
  - 예전에 드림코딩에서 위치변경을 top/left 같은 것으로 하는 것 보다 transform으로 하는게 성능적으로 더 좋았던 것을
    공부했던 것을 상기할 수 있어서 좋았다

## 38.6 자바스크립트 파싱과 실행

## 38.7 리플로우와 리페인트

## 38.8 자바스크립트 파싱에 의한 HTML 파싱 중단

## 38.9 script 태그의 async/defer 어트리뷰트
