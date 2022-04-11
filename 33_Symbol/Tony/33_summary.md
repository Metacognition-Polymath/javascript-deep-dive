# 33. 7번째 데이터 타입 Symbol

## 33.1 심벌이란?

- ES6에서 도입된 7번째 데이터 타입, 변경 불가능한 원시 타입
- 다른 값과 중복되지 않는 유일무이한 값
- 이름의 충돌 위험이 없는 유일한 프로퍼티 키를 만들기 위해 사용

## 33.2 심벌 값의 생성

- 다른 원시값들과 달리 생성자 함수를 호출해서 생성 가능(리터럴 표기법 없음)

  - new 연산자와 함께 호출하지 않는다.

- 심벌 값 생성 시 문자열을 인수로 전달할 수 있지만 디버깅 용도로만 사용되고 심벌값 생성에 어떠한 영향도 주지 않는다

```js
const mySymbol1 = Symbol("mySymbol");
const mySymbol2 = Symbol("mySymbol");

console.log(mySymbol1 === mySymbol2); // false
```

- 심벌도 문자열, 숫자, 불리언과 같이 객체처럼 접근하면 암묵적으로 래퍼 객체를 생성

```js
const aSymbol = Symbol("mySymbol");
console.log(aSymbol.description); // mySymbol
console.log(aSymbol.toString()); // Symbol(mySymbol)
```

### Symbol.for / Symbol.keyFor 메서드

- Symbol.for 메서드는 인수로 전달받은 문자열을 키로 사용하여
  키와 심벌 값의 쌍들이 저장되어 있는 전역 심벌 레지스트리에서
  해당 키와 일치하는 심벌 값을 검색한다
- Symbol.for 메서드 사용 시 전역에 없으면 전역레지스트리에 등록

```js
const s1 = Symbol.for("mySymbol");
const s2 = Symbol.for("mySymbol");
console.log(s1 === s2); // true but Error on Typescript
```

- Symbol.keyFor

```js
const s1 = Symbol.for("mySymbol");
console.log(Symbol.keyFor(s1)); // mySymbol - Symbol의 키를 추출

const s2 = Symbol("foo");
console.log(Symbol.keyFor(s2)); // undefined - Symbol 함수만 호출하는 것은 전역 레지스트리에 등록되지 않는다
```

## 33.3 심벌과 상수

```js
const Direction = Object.freeze({
  UP: Symbol("up"),
  DOWN: Symbol("down"),
});

console.log(Direction.UP === Direction.UP); // true
```

- enum 처럼 사용 가능

## 33.4 심벌과 프로퍼티 키

- object의 키로 사용 가능

```js
const obj = {
  [Symbol.for("aSymbol")]: 1,
};

obj[Symbol.for("aSymbol")]; // 1
```

- Symbol로 키를 만들면 기존 충돌할일이 없다
- 기존 키 뿐만아니라 미래에 추가될 키와도 충돌할 위험이 없다

## 33.5 심벌과 프로퍼티 은닉

- 심벌을 프로퍼티 키로 사용하면 외부에 공개되지 않는다

```js
const obj = {
  [Symbol.for("aSymbol")]: 1,
};

for (const key in obj) {
  console.log(key); // 아무것도 출력되지 않는다
}

console.log(Object.keys(obj)); // []
console.log(Object.getOwnPropertyNames(obj)); // []
console.log(Object.getOwnPropertySymbols(obj)); // [Symbol.for("aSymbol")]
```

- 심벌 프로퍼티를 찾는 메서드도 있다

## 33.6 심벌과 표준 빌트인 객체 확장

- 표준 빌트인 객체를 확장하는 것은 권장되지 않음 => 메서드를 오버라이딩 할 수 있기 때문
- 그러나 심벌을 사용하면 중복되지 않기 때문에 빌트인 객체 확장 시 안전하다

## 33.7 Well-known Symbol

- Well-known Symbol : 자바스크립트가 기본 제공하는 빌트인 심벌 값

  - 자바스크립트 엔진의 내부 알고리즘에 사용됨

- Symbol.iterator
  - 이터레이터를 반환하도록 규정되어 있음
  - 이터레이터 프로토콜(34.1)

```js
const iterable = {
  [Symbol.iterator]() {
    let cur = 1;
    const max = 5;
    return {
      next() {
        return {
          value: cur++,
          done: cur > max + 1,
        };
      },
    };
  },
};
```

- 이터레이터는 형태가 정해져 있음

- 심벌은 개발자보다 엔진 내부적으로 더 많이 사용되는 것 같다

- 다음장(내일) 이터러블을 공부하면서 더 자세히 알아보자
