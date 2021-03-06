# 23. 실행 컨텍스트

## 23.1 소스코드의 타입

- ECMAScript code type 4가지

  - 전역 코드(global code)
    - 전역에 존재하는 소스코드
    - 전역에 정의된 함수, 클래스 등의 내부 코드는 포함되지 않는다
  - 함수 코드(function code)
    - 함수 내부에 존재하는 소스코드를 말한다
    - 함수 내부에 중첩된 함수, 클래스 등의 내부 코드는 포함되지 않는다
  - eval 코드
    - 빌트인 전역 함수인 eval 함수에 인수로 전달되어 실행되는 소스코드를 말한다
  - 모듈 코드(module code)
    - 모듈 내부에 존재하는 소스코드를 말한다
    - 모듈 내부의 함수, 클래스 등의 내부 코드는 포함되지 않는다

- 소스코드(실행 가능한 코드, executable code)를 4가지 타입으로 구분하는 이유
  - 소스코드의 타입에 따라 실행 컨텍스트를 생성하는 과정과 관리 내용이 다르기 때문

#### 1. 전역 코드

- 최사위 스코프
- var, function으로 선언된 것들은 전역 객체의 프로퍼티와 메서드로 바인딩 됨
- 전역 코드가 평가되면 전역 실행 컨텍스트가 생성 된다

#### 2. 함수 코드

- 함수 코드는 지역 스코프를 생성하고 지역 변수, 매개변수, arguments 객체를 관리해야 한다.
- `스코프 체인` : 전역 스코프 -> 지역 스코프
- 함수 코드가 평가되면 함수 실행 컨텍스트가 생성된다

#### 3. eval 코드

- strict mode에서 자신만의 독자적인 스코프를 생성한다
- 이를 위해 eval 코드가 평가되면 eval 실행 컨텍스트가 생성된다
  - 이래서 react에서 연동이 안됐었구나

#### 4. 모듈 코드

- 모듈별로 독립적인 모듈 스코프를 생성한다
- 모듈 코드가 평가 되면 모듈 실행 컨텍스트가 평가 된다

## 23.2 소스코드의 평가와 실행

- 자바스크립트 엔진은 소스코드를 `소스코드의 평가`와 `소스코드의 실행` 과정으로 나누어 처리한다
- 소스코드 평가 과정

  - 실행 컨텍스트 생성
  - 변수, 함수 등의 선언문만 먼저 실행
  - 생성된 변수나 함수 식별자 -> '키'로 실행 하는 컨텍스트가 관리하는 스코프(렉시컬 환경 레코드)에 등록
    - 호이스팅

- 평과 과정 이후 선언문을 제외한 소스코드가 순차적으로 실행되기 시작
  - 즉, 런타임이 시작 됨
  - 이때 소스코드 실행에 필요한 정보 - 변수나 함수의 참조 - 를 실행컨텍스트가 관리하는 스코프(렉시컬 환경 레코드)에서 검색해서 취득
  - 변수 값의 변경 등 소스코드의 실행 결과는 다시 실행 컨텍스트가 관리하는 스코프(렉시컬 환경 레코드)에 등록 됨

```js
var x;
x = 1;
```

1. var x를 먼저 실행 - undefined로 초기화
2. 소스코드의 실행 과정에선 x = 1;만 실행 된다

- 2-0. 이때 x변수가 선언된 변수인지 확인해야 한다
- 2-1. x가 등록되어 있는지 확인 - 실행컨텍스트가 관리하는 스코프에

## 23.3 실행 컨텍스트의 역할

```js
const x = 1;
function foo(a) {
  const x = 10;
  console.log(a + x); // 함수 실행 시 console 식별자는 스코프체인을 통해 검색
  // log 프로퍼티도 console 객체의 프로토타입 체인을 통해 검색 됨
}
foo(100); // 전역 코드 실행이 멈추고 함수 코드 평가 + 함수 코드 실행

console.log(x); // 다시 전역 코드 실행이 이어짐
```

- 코드가 실행되려면 스코프를 구분하여 식별자와 바인딩 된 값이 관리되어야 한다
- 중첩 관계에 의해 스코프 체인을 형성하여 식별자를 검색할 수 있어야 한다
- 전역 객체의 프로퍼티도 전역 변수처럼 검색할 수 있어야 한다

- 함수 호출이 종료되면 함수 호출 이전으로 되돌아가기 위해 현재 실행 중인 코드와 이전에 실행하던 코드를 구분하여 관리해야 한다.
- 코드가 실행되려면

  - 스코프, 식별자, 코드 실행 순서 등의 관리가 필요하다
  - 이 모든것을 과리하는 것이 실행 컨텍스트이다

- 실행 컨텍스트는

  - 소스코드를 실행하는 데 필요한 환경을 제공하고
  - 실행 결과를 실제로 관리하는 영역이다

- 실행 컨텍스트는

  - 식별자(변수, 함수 등의 이름)를 등록하고 관리하는 스코프와
    - 코드 실행 순서를 구현한 내부 메커니즘이다
  - 모든 코드는 실행 컨텍스트를 통해 실행되고 관리된다

- `식별자와 스코프`는 `렉시컬 환경`으로 관리하고
- `코드 실행 순서`는 `실행 컨텍스트 스택`으로 관리한다

## 23.4 실행 컨텍스트 스택

```js
const x = 1;

function foo() {
  const y = 2;

  function bar() {
    const z = 3;
    console.log(x + y + z);
  }

  bar();
}

foo();
```

#### 실행 컨텍스트 스택

- []
- [전역 실행 컨텍스트]
- [전역 실행 컨텍스트, foo 함수 실행 컨텍스트]
- [전역 실행 컨텍스트, foo 함수 실행 컨텍스트, bar 함수 실행 컨텍스트]
- [전역 실행 컨텍스트, foo 함수 실행 컨텍스트]
- [전역 실행 컨텍스트]
- []

> 실행 컨텍스트 스택에 실행 컨택스트가 추가(push)되고 제거(pop) 된다

## 23.5 렉시컬 환경(Lexical Environment)

- 자료구조

  - 식별자와 식별자에 바인딩된 값 기록
  - 상위 스코프에 대한 참조를 기록
  - 실행 컨텍스트를 구성하는 컴포넌트

- 실행 컨텍스트 스택 : 코드의 실행 순서를 관리
- 렉시컬 환경 : 스코프와 식별자를 관리

- 렉시컬 환경

  - 키-값을 갖는 객체 형태의 스코프(전역, 함수, 블록 스코프)를 생성하여 식별자를 키로 등록하고
  - 식별자에 바인딩된 값을 관리
  - 스코프를 구분하여 식별자를 등록하고 관리하는 저장소 역할을 하는 렉시컬 스코프의 실체

#### 렉시컬 환경은 다음 두 개의 컴포넌트로 구성된다

1. 환경 레코드(Environment Record)
   - 스코프에 포함된 식별자를 등록
   - 등록된 식별자에 바인딩된 값을 관리
   - 소스코드의 타입에 따라 관리하는 내용에 차이가 있다
2. 외부 렉시컬 환경에 대한 참조(Outer Lexical Environment Reference)
   - 상위 스코프를 가리킨다
   - 외부 렉시컬 환경에 대한 참조를 통해 단방향 링크드 리스트, 스코프 체인을 구현한다

## 23.6 실행 컨텍스트의 생성과 식별자 검색 과정

### 23.6.1 전역 객체 생성

### 23.6.2 전역 코드 평가

- 전역 코드 평가 순서
  - 1. 전역 실행 컨텍스트 생성
  - 2. 전역 렉시컬 환경 생성
    - 2.1 전역 환경 레코드 생성
      - 2.1.1. 객체 환경 레코드 생성
        - `호이스팅` - undefined로 초기화
        - let, const -> Temporal Dead Zone -> 호이스팅은 되지만 에러를 발생시킴
      - 2.1.2. 선언적 환경 레코드 생성
    - 2.2 this 바인딩
    - 2.3 외부 렉시컬 환경에 대한 참조 결정

#### 함수 코드 평가

```js
var x = 1;
const y = 2;

function foo(a) {
  var x = 3;
  const y = 4;

  function bar(b) {
    const z = 5;
    console.log(a + b + x + y + z);
  }
  bar(10);
}

foo(20);
```

- foo함수가 호출되면 전역 코드의 실행을 일시 중단하고 foo함수 내부로 코드의 제어권이 이동한다.

  - 그리고 함수 코드 평가를 시작한다
  - 함수 코드평가 순서
    - 함수 실행 컨텍스트 생성
    - 함수 렉시컬 환경 생성
      - 함수 환경 레코드 생성
      - this 바인딩
      - 외부 렉시컬 환경에 대한 참조 결정

- 함수를 어디서 호출했는지가 아니라 어디에 정의했는지에 따라 상위 스코프를 결정한다
- 함수 정의를 평가하여 함수 객체를 생성할 때 현재 실행 중인 실행 컨텍스트의 렉시컬 환경,
  - 함수의 상위 스코프를 함수 객체 내부 슬롯[[Environment]]에 저장한다(참조)
    - 이 내부 슬롯에 저장된 실행컨텍스트(렉시컬환경)은 가비지 컬렉션이 되지 않는 것 같다 - `클로저`
- 식별자 검색 - console

  - console 식별자를 현재 스코프(현재 실행 중인 실행 컨텍스트의 렉시컬 환경) 부터
    - 없으면 상위 스코프로 이동하여 검색 -> 전역 객체가 느린 이유
    - console의 log 메서드 검색 -> 프로토타입 체이닝을 통해 검색

- 함수 실행이 종료 되면 함수 실행 컨텍스트가 소멸
  - 만약 소멸되는 함수 렉시컬 환경을 누군가 참조하고 있다면 렉시컬 환경은 소멸하지 않는다

## 23.7 실행 컨텍스트와 블록 레벨 스코프

- var 키워드 : 함수 레벨 스코프를 따름
- let, const 키워드 : 블록을 지역 스코프로 인정하는 블록 레벨 스코프를 따름
- 블록 레벨 문(if, for 등)이 실행 될 때 마다 코드블록을 위한 새로운 렉시컬 환경을 생성한다
  - for 문은 코드 블록이 반복해서 실행 될 때 마다 독립적인 렉시컬 환경을 생성하여 식별자의 값을 유지한다
    - 24장 클로저에서 자세히 살펴보자

## 스터디

- 다른 언어의 콜 스택과 비슷
- 같이 보면 좋은 영상
  - https://www.youtube.com/playlist?list=PLjQV3hketAJnP_ceUiPCc8GnNQ0REpCqr
    - 재생 목록 6번, 23장 실행 컨텍스트
