# 39. DOM

- 38장에서 알아본바와 같이 브라우저의 렌더링 엔진은 HTML문서를 파싱하여
- 브라우저가가 이해할 수 있는 자료구조인 DOM을 생성한다
- DOM(Document Object Model)
  - HTML 문서의 계층적 구조와 정보를 표현
  - 이를 제어할 수 있는 API
  - 즉, **프로퍼티와 메서드를 제공하는 트리 자료구조이다**

## 39.1 노드

### 39.1.1 HTML요소와 노드 객체

```html
<div class="greeting">Hello</div>
```

- 시작 태그 : `<div>`
- 어트리뷰트 이름 : `class`
- 어트리뷰트 값 : `"greeting"`
- 콘텐츠 : `Hello`
  - 다른 HTML 요소도 포함될 수 있음
- 종료 태그 : `</div>`

#### 트리 자료구조

- 부모 노드와 자식 노드로 구성되어 노드간의 계층적 구조(부자, 형제 관계)를 표현하는 비선형 자료구조
  - 루트 노드 : 최상위 노드
  - 리프 노드 : 자식 노드가 없는 노드
  - 비선형 자료 구조 : 하나의 자료 뒤에 여러개의 자료가 존재할 수 있는 구조 : 트리 or 그래프
    - 선형 자료 구조 : 하나의 자료 뒤에 하나의 자료만 존재하는 자료구조 : 배열, 스택, 큐, 링크드 리스트, 해시 테이블

### 39.1.2 노드 객체의 타입

- 총 12가지 종류 중 중요한 4가지
  - 문서 노드
    - HTML
  - 요소 노드
    - 문서의 구조, 부자 관계
  - 어트리뷰트 노드
    - HTML요소의 어트리뷰트를 가리키는 객체
  - 텍스트 노드
    - DOM트리의 최종단

### 39.1.3 노드 객체의 상속 구조

Object -> EventTarget -> Node

- Document
- Element -> HTMLElement -> HTMLDivElement, ...
- Attr
- CharacterData

  - Text
  - Comment

- 노드 객체 properties는 개발자 도구를 통해서도 확인 가능하다

- DOM API
  - 프로퍼티와 메서드 집합
  - window.document

## 39.2 요소 노드 취득

### id를 이용한 요소 노드 취득

- id 어트리뷰트 vs class 어트리뷰트

  - class는 하나의 어트리뷰트값에 여러개를 할당할 수 있지만(공백으로 구분)
  - id는 하나만 부여 가능
    - 띄어쓰기도 id의 string의 일부로 취급 됨
  - 단 HTML문서 내 같은 id를 가진 노드가 여러개 있어도 상관없다

- HTML요소에 id 어트리뷰트를 부여하면 id값과 동일한 이름의 전역변수가 암묵적으로 선언되고 해당 노드가 할당된다.

### CSS선택자를 이용한 요소 노드 취득

```js
const el = document.querySelector(".header__menu");
```

- getElementById가 querySelector보다 조금 더 빠르기 때문에 id로 가져올 땐 getElementById를 이용하자

- querySelectorAll 메서드는 DOM 컬렉션 객체, NodeList를 반환(유사 배열, 이터러블)
