# 19. 프로토타입

- 자바스크립트는 명령형, 함수형, 프로토타입 기반 객체지향 프로그래밍을 지원하는 멀티 패러다임 프로그래밍 언어
- 클래스 : 프로토타입 기반 패턴의 syntactic sugar 이다
  - 클래스의 생성자 함수는 일반 생성자 함수와는 달라서 새로운 객체 생성 메커니즘으로 보는 것이 좀 더 합당하다
  - 25장에서 자세히 다룸

## 19.1 객체지향 프로그래밍

- 객체지향 프로그래밍 : 객체의 상태를 나타내는 데이터와 상태 데이터를 조작할 수 있는 동작을 하나의 논리 단위로 묶어 생각한다
  - 상태 : state
  - 동작 : method

## 19.2 상속과 프로토타입

- `동일한 생성자 함수`에 의해 생성된 모든 인스턴스는 `동일한 메서드`를 소유 - 메모리 공유, 낭비 절약
- 생성자 함수가 생성할 모든 인스턴스가 공통으로 사용할 프로퍼티나 메서드를 프로토타입에 미리 구현해두면
  생성자 함수가 생성할 모든 인스턴스는 별도의 구현 없이 상위(부모) 객체인 프로토타입의 자산을 공유하여 사용할 수 있다

## 19.3 프로토타입 객체

- 모든 객체는 [[Prototype]]이라는 내부 슬롯을 가짐
- 프로토타입 : 어떤 객체의 상위(부모) 객체의 역할을 하는 객체
- 공유 프로퍼티(메서드 포함)를 제공한다
- 모든 객체는 하나의 프로토타입을 갖는다

### 19.3.1 `__proto__` 접근자 프로퍼티

- 모든 객체는 `__proto__` 접근자 프로퍼티를 통해 자신의 프로토타입에 간접적으로 접근할 수 있다

  - get, set으로 구성된 프로퍼티 : 접근자 프로퍼티
    - get: f `__proto__`
    - set: f `__proto__`

- 모든 객체는 프로토타입의 계층 구조인 프로토타입 체인에 묶여 있다

  - `__proto__`는 Object.prototype.`__proto__`의 접근자 프로퍼티이다
  - 어떤 프로퍼티에 접근하려할 때 없다면 `__proto__` 접근자 프로퍼티가 가리키는 참조를 따라
    자신의 부모역할을 하는 프로토타입 프로퍼티를 순차적으로 검색한다
  - 프로토타입의 종점, 최상위 객체는 Object.prototype 이다

- `__proto__` 접근자를 통해 프로토타입에 접근하는 이유

  - getter, setter로 구성됨 -> setter에서 순환참조를 방지하는 코드가 있을 것으로 추정 됨
  - 상호참조에 의해 프로토타입 체인이 생성되는 것을 방지하기 위해
  - 프로토타입 체인은 단방향 링크드 리스트로 구현되어야 한다
    - 프로퍼티 검색 방향이 한쪽 방향으로만 흘러가야 한다
    - 순환 참조하는 체인이 만들어지면 종점이 존재하지 않기 때문에 프로토타입 체인에서 프로퍼티를 검색할 때 무한 루프에 빠진다

- `__proto__`를 사용하는 것은 권장하지 않는다
  - `__proto__`보다 Object.getPrototypeOf 메서드를 사용하는 편이 좋다
    - 예제 18_12.ts에서 확인함
  - 교체하고 싶다면 Object.setPrototypeOf 메서드를 사용

### 19.3.2 함수 객체의 prototype 프로퍼티

- 함수 객체만이 고유하는 prototype 프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토타입을 가리킨다
- 생성자 함수가 될 수 없는 화살표 함수는 prototype 프로퍼티를 소유하지 않으며, 프로토타입도 생성하지 않는다

```js
// 예제 19-13
// 생성자 함수
function Person(name) {
  this.name = name;
}

const me = new Person("tony");

console.log(Person.prototype === me.__proto__);
```

- 생성자 함수로 부터 생성된 인스턴스
  - 인스턴스의 생성자 함수 !== 인스턴스의 프로토타입

### 19.3.3 프로토타입의 constructor 프로퍼티와 생성자 함수

- 모든 프로토타입은 constructor 프로퍼티를 갖는다
  - 이 constructor 프로퍼티는 prototype 프로퍼티로 자신(인스턴스)이 참조하고 있는 생성자 함수를 가리킨다

```js
// 예제 19-14
// 생성자 함수
function Person(name) {
  this.name = name;
}

const me = new Person("tony");

// console.log(Person.prototype === me.__proto__);
console.log(me.constructor === Person);
```

- me 객체는 프로토타입의 constructor 프로퍼티를 통해 생성자 함수와 연결된다

## 19.4 리터럴 표기법에 의해 생성된 객체의 생성자 함수와 프로토타입

## 19.5 프로토타입의 생성 시점

- 프로토타입은 생성자 함수가 생성되는 시점에 더불어 생성된다
- 프로토타입과 생성자 함수는 단독으로 존재할 수 없고 언제나 쌍으로 존재하기 때문

### 빌트인 생성자 함수와 프토토타입 생성 시점

- Object, String, Number, Date, Promise, RegExp 등과 같은 빌트인 생성자 함수도 일반함수와 마찬가지로
  빌트인 생성자 함수가 생성되는 시점에 프로토타입이 생성된다
- 모든 빌트인 생성자 함수는 전역 객체가 생성되는 시점에 생성된다
- 생성된 프토토타입은 빌트인 생성ㅇ자 함수의 prototype 프로퍼티에 바인딩 된다

## 19.6 객체 생성 방식과 프로토타입의 결정

## 19.7 프로토타입 체인

## 19.8 오버라이딩과 프로퍼티 섀도잉

- 오버라이딩 : 상위 클래스가 가지고 있는 메서드를 하위 클래스가 재정의하여 사용하는 방식
- 오버로딩 : 함수의 이름은 동일하지만 매개변수의 타입 또는 개수가 다른 메서드를 구현하고 매개변수에 의해 메서드를 구별하여 호출하는 방식
  - 자바스크립트는 오버로딩을 지원하지 않지만 arguments 객체를 사용하여 구현가능
  - 식별자 중복되면 에러 뜸 -> 안됨

## 19.9 프로토타입의 교체

- 프로토타입은 임의의 다른 객체로 변경될 수 있다

  - 부모객체를 동적으로 변경할 수 있다

- 프로토타입 교체를 통해 객체 간의 상속 관계를 동적으로 변경하는 것은 하지 않는 것이 좋다

## 19.10 instanceof 연산자

```js
`객체` instanceof `생성자 함수`; // => boolean
```

```js
// 예제 19_49. instanceof 연산자를 함수로 구현하기
function isInstanceof(instance, constructor) {
  const prototype = Object.getPrototypeOf(instance);

  // 재귀 탈출 조건
  // prototype이 null이면 프로토타입 체인의 종점에 다다른 것이다.
  if (prototype === null) {
    return false;
  }

  return (
    prototype === constructor.prototype || isInstanceof(prototype, constructor)
  );
}
```

## 19.11 직접 상속

- Object.create 메서드
- `__proto__`에 의한 직접 상속
  - getter, setter 로 구현되어 있음, 프로토타입을 직접 지정 가능

## 19.12 정적 프로퍼티/메서드

- 정적(static) 프로퍼티/메서드는 생성자 함수로 인스턴스를 생성하지 않아도 참조/호출할 수 있는 프로퍼티/메서드를 말한다.

```js
// 생성자 함수
function Person(name) {
  this.name = name;
}

// 프로토타입 메서드
Person.prototype.sayHello = function () {
  console.log(`Hi! I'm ${this.name}`);
};

// 정적 프로퍼티
Person.staticProp = "static prop";

// 정적 메서드
Person.staticMethod = function () {
  console.log("staticMethod");
};

const me = new Person("tony");

Person.staticMethod(); // 'staticMethod';

me.staticMethod(); // TypeError: me.staticMethod is not a function
```

- 정적 프로퍼티/메서드는 생성자 함수가 아닌 인스턴스로 참조/호출할 수 없다

## 19.13 프로퍼티 존재 확인

### in 연산자

- in 연산자는 객체 내 특정 프로퍼티가 존재하는지 여부를 확인한다.

```js
// key in object
// 예제 19-59
const person = {
  name: "Tony",
  address: "Seoul",
};

console.log("name" in person); // true
console.log("age" in person); // false
```

### Object.prototype.hasOwnProperty 메서드

```js
// 예제 19-62
const person = {
  name: "Tony",
  address: "Seoul",
};
console.log(person.hasOwnProperty("name")); // true
```

## 19.14 프로퍼티 열거

- for ... in
- 객체의 모든 프로퍼티를 순회하며 열거(enumeration)하려면 for ... in 문을 사용한다.

```js
// for (변수선언문 in 객체) {...}
// 예제 19-64. for ... in
const person = {
  name: "Tony",
  address: "Seoul",
};

for (const key in person) {
  console.log(key + ": " + person[key]);
}
```

### Object.keys / values / entries 메서드

for ... in 보다 Object.keys/values/entries 메서드를 사용하는 것을 권장한다

```js
// 예제 19-74
const person = {
  name: "Tony",
  address: "Seoul",
};

Object.entries(person).forEach(([key, value]) => console.log(key, value));
```
