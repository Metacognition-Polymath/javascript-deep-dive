# 26. ES6 함수의 추가 기능

## 26.1 함수의 구분

- 함수는 너무 포함된 기능이 많다

  - 함수, 생성자 함수, 메서드 등
  - 실수 유발 가능성, 성능면에서도 손해
  - callable, constructor

- ES6에서는 함수를 사용 목적에 따라 세 가지로 명확히 구분했다

  - 일반 함수(Normal)에 포함된 것들 : constructor, prototype, arguments
  - 메서드(Method) : super, arguments
  - 화살표 함수(Arrow) : -

- 사실 위 함수들 외에도 제너레이터 함수와 async 함수가 존재한다

## 26.2 메서드

```js
const obj = {
  x: 1,
  foo() {
    return this.x;
  },
};
```

- 메서드는 축약표현으로 정의된 함수만을 의미
- 표준 빌트인 객체가 제공하는 프로토타입 메서드와 정적 메서드는 모두 non-constructor이다.(생성자로 사용 불가)

- 메서드가 아닌 함수는 super 키워드를 사용할 수 없다.
  - ES6메서드가 아닌 함수는 내부 슬롯 [[HomeObject]]를 갖지 않기 때문이다.

## 26.3 화살표 함수

- this가 전역 객체를 가리키는 문제를 해결하기 위한 대안으로 유용하다

### 26.3.1 화살표 함수 정의

```js
// 아래 두 함수는 같은 함수이다.
const create = (id, content) => ({ id, content });
const create = (id, content) => {
  return id, content;
};
```

- 화살표 함수도 즉시 실행 함수로 사용할 수 있다

  - 즉시 실행함수는 가독성이 떨어지므로 개인적으론 별로인 것 같다

- 화살표 함수도 일급 객체이므로 고차함수의 인수에 전달할 수 있다.

### 26.3.2 화살표 함수와 일반함수의 차이

- 화살표함수는 non-constructor 이다.
  - 프로토타입도 생성하지 않는다.
- 화살표 함수는 함수 자체의 this, arguments, super, new ,target 바인딩을 갖지 않는다
  - 만약 화살표 함수와 화살표함수가 중첩되어 있다면 둘다 this, arguments, super, new.target 바인딩이 없으므로
    - 스코프 체인 상에서 가장 가까운 상위 함수 중에서 화살표 함수가 아닌 함수의 this, arguments, super, new.target을 참조한다

### 26.3.3 this

화살표 함수는 콜백 함수 내부의 this문제를 해결하기 위해 의도적으로 설계된 것이다

- 클래스에서 strict 모드가 적용되기 때문에 고차함수의 콜백함수에서 this를 사용하는 경우 TypeError가 발생한다

```ts
// this 바인딩 방법 1
class Prefixer1 {
  private prefix: string;
  constructor(prefix: string) {
    this.prefix = prefix;
  }
  add(arr: string[]) {
    const that = this;
    return arr.map(function (item) {
      return that.prefix + " " + item;
    });
  }
}

// this 바인딩 방법 2
class Prefixer2 {
  private prefix: string;
  constructor(prefix: string) {
    this.prefix = prefix;
  }
  add(arr: string[]) {
    return arr.map(function (item) {
      return this.prefix + " " + item;
    }, this); // this에 바인딩된 값이 콜백 함수 내부의 this에 바인딩 된다.
  }
}

// this 바인딩 방법 3
class Prefixer3 {
  private prefix: string;
  constructor(prefix: string) {
    this.prefix = prefix;
  }
  add(arr: string[]) {
    return arr.map((item) => {
      return this.prefix + " " + item;
    });
  }
}
```

- 화살표 함수는 this바인딩을 갖지 않아서 상위 스코프의 this를 그대로 참조한다

  - lexical this

- 전역 함수의 스코프는 this 이므로 전역에서 this는 전역 객체를 가리킨다
- 화살표 함수는 this바인딩을 갖지 않기 때문에 Function.prototype.call, apply, bind 메서드를 사용해도 this를 교체할 수 없다

- 화살표 함수로 메서드로서 사용하지 말자 - this가 가리키지는 값이 달라질 수 있음(globalThis)

- 클래스 필드 정의 제안(25.7.3)을 사용하여 클래스 필드에 화살표 함수를 할당할 수도 있다

- 클래스 필드에 할당한 화살표 함수는 프로토타입 메서드가 아니라 인스턴스 메서드가 된다
  - 따라서 메서드를 정의할 때는 ES6 메서드 축약 표현으로 정의한 ES6 메서드를 사용하는 것이 좋다

### 26.3.4 super

화살표 함수는 함수 자체의 super 바인딩을 갖지 않는다

- 화살표 함수 내부에서 super를 참조하면 this와 마찬가지로 상위 스코프의 super를 참조한다
  - super는 [[HomeObject]]를 갖는 축양 메서드 내에서만 사용할 수 있는 키워드 이다.

## 26.4 Rest 파라미터

## 26.5 매개변수 기본값
