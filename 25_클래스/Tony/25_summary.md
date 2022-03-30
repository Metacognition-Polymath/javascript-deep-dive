# 25. 클래스

## 25.1 클래스는 프로토타입의 문법적 설탕인가? => 그렇다

- 자바스크립트는 프로토타입 기반 객체지향 언어다
- 클래스는 생성자 함수보다 엄격하며 생성자 함수에서는 제공하지 않는 기능도 제공한다

#### 클래스와 생성자 함수의 차이점

1. 클래스를 new 연산자 없이 호출하면 에러가 발생한다.

- 하지만 생성자 함수를 new 연산자 없이 호출하면 일반 함수로서 호출된다.

2. 클래스는 상속을 지원하는 extends와 super 키워드를 제공한다.

- 생성자 함수는 지원하지 않는다.

3. 클래스는 호이스팅이 발생하지 않는 것 처럼 동작한다.
4. 클래스 내의 모든 코드에는 암묵적으로 strict mode가 지정되어 실행되며, strict mode를 해제할 수 없다.
5. 클래스의 constructor, 프로토타입 메서드, 정적 메서드는 모두 프로퍼티 어트리뷰트 [[Enumerable]]의 값이 false다.

- 즉, 열거되지 않는다.

결론, 클래스는 단순한 문법적 설탕으로 보기보다 새로운 객체 생성 메커니즘으로 보는 것이 더 합당하다.

## 25.2 클래스 정의

- 파스칼 케이스로 네이밍하는 것이 국룰이지만 그렇지 않는다고 에러가 발생하지는 않는다
- 익명 클래스도 가능하다

```ts
const Person = class {};
```

- 클래스의 일급 객체이며, 다음과 같은 특징을 갖는다

  - 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
  - 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
  - 함수의 매개변수에게 전달할 수 있다
  - 함수의 반환값으로 사용할 수 있다

- 클래스에 정의할 수 있는 메서드

  - constructor(생성자)
  - 프로토타입 메서드
  - 정적 메서드

- 클래스도 let, const 키워드와 같은 방식으로 호이스팅 되며 Temporal Dead Zone이 존재한다.
  - var, let, const ,function ,function\*, class 키워드를 사용하여 선언된 모든 식별자는 호이스팅된다.

## 25.4 인스턴스 생성

- new 클래스명()

## 25.5 메서드

### 25.1 constructor

- constructor 내부의 this는 클래스가 생성한 인스턴스를 가리킨다

#### 클래스의 constructor 메서드 vs 프로토타입의 constructor 프로퍼티

- 관련 없음
- 프로토 타입의 constructor 프로퍼티는 프로토타입이 가지고 있는 프로퍼티, 생성자 함수

#### 생성자 함수와 유사하지만 차이점

- 클래스 내 최대 한개만 존재
- 생략 가능 - 암묵적으로 정의 됨
- 생성자 함수의 return은 this로 고정된다(return을 다른것을 지정해도 this가 리턴 됨)

### 25.5.3 정적 메서드

클래스 안의 메서드에 static 키워드를 붙이면 된다.

- 정적 메서드는 인스턴스로 사용할 수 없고
- 상속도 되지 않는다

### 25.5.4 정적 메서드와 프로토타입 메서드의 차이

1. 정적 메서드와 프로토타입 메서드는 자신이 속해 있는 프로토타입 체인이 다르다
2. 정적 메서드는 클래스로 호출하고 프로토타입 메서드는 인스턴스로 호출한다
3. 정적 메서드는 정적 필드만 사용 가능 / 인스턴스 메서드는 인스턴스 필드만 사용가능

- 정적 메서드는 앱 젙역에서 사용할 유틸리티 함수이다.

### 25.5.5 클래스에서 정의한 **메서드**의 특징

1. function 키워드를 생략한 메서드 축약
2. 객체 리터럴과는 다르게 클래스에 메서드를 정의할 때는 콤마가 필요없다
3. 암묵적으로 strict mode로 실행된다
4. for ... in 문이나 Object.keys 메서드 등으로 열거할 수 없다.
   즉, 열거 가능 여부를 나타내며, 불리언 값을 갖는 프로퍼티 어트리뷰트 [[Enumerable]]의 값이 false다.
5. 내부 메서드 [[Construct]]를 갖지 않는 non-constructor다.
   따라서 new 연산자와 함께 사용할 수 없다.(클래스의 메서드를 누가 new랑 사용하겠냐)

## 25.6 클래스의 인스턴스 생성 과정

#### 1. 인스턴스 생성과 this 바인딩

- 암묵적으로 생성된 빈 객체({})와 인스턴스는 this에 바인딩된다.
- constructor 내부의 this는 클래스가 생성한 인스턴스를 가리킨다.

#### 2. 인스턴스 초기화

- constructor의 내부 코드가 실행되어 this에 바인딩되어 있는 인스턴스를 초기화한다.
- 요즘엔 그냥 클래스 필드에 선언하면 그게 인스턴스 필드이다. 생성자 내부에서 초기화 하지 않아도 된다.

#### 3. 인스턴스 반환

클래스의 모든 처리가 끝나면 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다

## 25.7 프로퍼티

- 생성자 내부에서 정의하지 않아도 된다(책이 잘 못 됨)
  - 크롬 72 이상
  - Node.js 12 이상

### 클래스 필드 정의 제안

### static 필드 정의 제안

## 25.8 상속에 의한 클래스 확장

### 25.8.1 클래스 상속과 생성자 함수 상속

- 상속 받은 서브클래스가 constructor를 생략하면

```js
constructor(...args) {super(...args)}
```

- 이와 같은 constructor가 암묵적으로 정의 된다

### 25.8.5 super 키워드

- 함수처럼 호출할 수도 있고 this와 같이 식별자 처럼 참조할 수 있는 특수한 키워드다.
  - super를 호출하면 부모클래스의 constructor를 호출한다
  - super를 참조하면 부모클래스의 메서드를 호출할 수 있다

```js
class Base {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

class Derived extends Base {
  // 암묵적으로 constructor(...args) {super(...args)} 가 정의된다
}

const derived = new Derived(1, 2); // 서브클래스의 암묵적인 생성자에 의해 부모로 전달된다
```

```js
class Base {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

class Derived extends Base {
  constructor(a, b, c) {
    super(1, 2);
    this.c = c;
  }
}

const derived = new Derived(1, 2, 3);
```

- 부모에게 1, 2를 전달하고 3은 자식 클래스에 전달된다

#### super를 호출할 때 주의할 사항

1. 서브클래스에서 constructor를 생략하지 않는 경우

   - 서브클래스의 constructor에서는 반드시 super를 호출해야 한다.

2. 서브클래스의 constructor에서 super를 호출하기 전에는 this를 참조할 수 없다.

3. super는 반드시 서브클래스의 constructor에서만 호출한다.
   서브 클래스가 아닌 클래스의 constructor나 함수에서 super를 호출하면 에러가 발생한다.

#### super 참조

- 메서드 내에서 super를 참조하면 수퍼클래스의 메서드를 호출할 수 있다

1. 서브클래스의 프로토타입 메서드 내에서 super.sayHi는 수퍼클래스의 프로토타입 메서드 sayHi를 가리킨다

```js
class Base {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return `Hi ${this.name}`;
  }
}

class Derived extends Base {
  sayHi() {
    return `${super.sayHi()}. how are you doing?`; // 부모 메서드의 결과에 추가로 연산이 필요할 때 주로 사용하는 듯
  }
}

const derived = new Derived("Tony");
console.log(derived.sayHi()); // Hi Tony. how are you doing?
```

### 25.8.6 상속 클래스의 인스턴스 생성 과정

### 25.8.7 표준 빌트인 생성자 함수 확장

```js
class MyArray extends Array {
  static get [Symbol.species]() {
    return Array;
  }
  uniq() {
    return this.filter((v, i, self) => self.indexOf(v) === i);
  }
}
```
