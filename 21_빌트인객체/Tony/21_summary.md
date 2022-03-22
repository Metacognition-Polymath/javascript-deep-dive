# 21. 빌트인 객체

## 21.1 자바스크립트 객체의 분류

- 표준 빌트인 객체
  - ECMAScript 사양에 정의 된 객체
- 호스트 객체
  - 실행 환경에서 제공하는 객체
    - 브라우저 : DOM, Canvas, fetch, ...
- 사용자 정의 객체
  - 사용자가 직접 정의한 객체

## 21.2 표준 빌트인 객체

- Object, String, Number, Boolean, Symbol, Date, Math, RegExp, Array,
- Map, Set, WeakMap, WeakSet, Function, Promise, Reflect, Proxy, JSON, Error 등
- 자바스크립트는 40여 개의 빌트인 객체를 제공한다
- Math, Reflect, JSON을 제외한 표준 빌트인 객체는 모두 생성자 함수 객체다
  - 생성자 함수가 아닌 객체는 정적 메서드만 제공한다

```js
// 예제 21-3

const numObj = new Number(1.5); // [Number: 1.5]
console.log(numObj);

// toFixed는 Number.prototype의 프로토타입 메서드다
console.log(numObj.toFixed()); // 반올림 하여 문자열로 반환한다 => 2

// isInteger는 Number의 정적 메서드이다
console.log(Number.isInteger(0.5)); // false
```

## 21.3 원시값과 래퍼 객체

```js
// 21-4
const str = "hello";

// 원시 타입인 문자열이 프로퍼티와 메서드를 갖고 있는 객체처럼 동작한다
console.log(str.length);
```

- 원시값이 있는데 String, Number, Boolean 등 표준 빌트인 생성자 함수가 존재하는 이유는?
  - 원시값을 객체처럼 사용할 수 있음
  - 원시값을 객체처럼 사용하면 암묵적으로 연관된 객체를 생성하여 생성된 객체로 프로퍼티에 접근하거나 메서드를 호출하고 다시 원시값으로 되돌린다
- 원시 값에 객체처럼 접근 시 생성되는 `임시 객체`를 `래퍼 객체`(wrapper object)라고 한다
- e.g., 문자열에 객체처럼 접근해 생성된 임시 객체에선 문자열은 래퍼 객체의 내부 슬롯 - [[String Data]] - 에 할당 된다
  - 래퍼 객체의 처리가 종료되면 `래퍼객체는 가비지 컬렉션의 대상이 된다`
- null, undefined는 래퍼객체를 생성하지 않는다
  - 객체처럼 사용 시 에러가 발생한다

## 21.4 전역 객체

- window or global
- ECMAScript2020(ES11)에서 도입된 `globalThis` 는 브라우저와 Node.js의 전역객체를 통일한 식별자이다

- 전역 객체의 특징
  - 전역객체는 개발자가 의도적으로 생성할 수 없다. 즉, 전역 객체를 생성할 수 있는 생성자 함수가 제공되지 않는다
  - 전역 객체의 프로퍼티를 참조할 때 window(또는 global)를 생략할 수 있다.
- let, const로 전언한 변수는 전역 객체의 프로퍼티가 아니다

### 빌트인 전역 프로퍼티

- Infinity === window.Infinity
- NaN === window.NaN

### 빌트인 전역 함수

- eval : 자바스크립트 코드를 나타내는 문자열을 인수로 받는다

  - 전달 받은 문자열 코드가 표현식이라며 런타임에 평가하여 값을 생성
  - 표현식이 아닌 문이라면 문자열 코드를 `런타임에 실행`한다
  - 문자열 코드가 여러개의 문으로 이루어져 있다면 모든 문을 실행한다
  - 인수로 전달받은 문자열 코드가 여러개의 문이라면 마지막 결과 값을 반환한다
    - eval('1+2; 3+4;'); // 7
  - eval 함수는 기존의 스코프를 런타임에 동적으로 수정한다
    - strict mode에선 스코프를 수정하지 않고 자체적인 스코프를 생성한다
  - eval함수를 통해 사용자로 부터 입력받은 콘텐츠를 실행하는 것은 보안에 매우 취약
  - eval함수를통해 실행되는 코드는 자바스크립트 엔진에 의해 최적화가 수행되지 않으므로 일반적인 코드 실행에 비해 처리속도가 느림
  - eval함수의 사용은 금지해야 한다 !

- isFinite
  - 전달받은 인수가 유한수인지 검사한다
- isNaN
- parseFloat
  - 전달받은 문자열 인수를 부동 소수점 숫자, 즉 실수로 해석(parsing)하여 반환한다
- parseInt
  - 전달받은 문자열 인수를 정수(integer)로 해석(parsing)하여 반환한다

```js
parseInt("10"); // 10
parseInt("10", 2); // 2
// 전달 받은 인수를 두번째 인수(생략시 10진수)로 해석하여 그 결과를 10진수로 반환

// n진수로 반환하고 싶은 경우 Number.prototype.toString 메서드를 사용
const x = 15;
x.toString(2); // '1111' // 15를 2진수로 변환
x.toString(8); // '17' // 15를 8진수로 변환
```

- n진수로 반환하고 싶은 경우 Number.prototype.toString 메서드를 사용

```js
// 16진수를 해석하고 10진수로 반환
parseInt("0xf"); // 15

// 2진수와 8진수는 제대로 해석하지 못 한다
parseInt("0b10"); // 0
parseInt("0o10"); // 0

// 2진수나 8진수를 해석하게 하려면 반드시 두번째 인자로 지정해줘야 한다
parseInt("11", 2); // 3
parseInt("11", 8); // 9
```

- encodeURI / decodeURI
  - encodeURI 함수는 URI를 문자열로 받아 이스케이프 처리를 위해 인코딩한다
    - 아스키 문자 셋으로 변환하는 것
      - `가` -> `%EC%9E%90`
  - decodeURI 함수는 인코딩된 URI를 인수로 받아 이스케이프 처리 이전으로 디코딩한다

### 암묵적 전역

- 선언하지 않은 식별자를 암묵적으로 전역객체의 프로퍼티로 추가하는 것
  - strict모드에선 사용할 수 없음
