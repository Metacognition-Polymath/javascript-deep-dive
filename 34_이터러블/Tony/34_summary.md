# 34. 이터러블(iterable)

## 34.1 이터레이션 프로토콜

- iteration protocol은 순회 가능한(iterable) 데이터 컬렉션(`자료구조`)을 만들기 위해 ECMAScript 사양에 정의하여 미리 약속한 규칙이다
- ES6이전의 순회 가능한 데이터 컬렉션 => 배열, 문자열, 유사배열 객체, DOM 컬렉션 등

  - 통일된 규약 없이 각자 나름의 구조를 가지고 for문, for ... in문, forEach 메서드 등 다양한 방법으로 순회할 수 있었다

- ES6에서 순회 가능한 데이터 컬렉션을 이터레이션 프로토콜을 준수하는 이터러블로 통일하여 아래의 것들을 사용가능하게 함

  - for ... of 문
  - 스프레드 문법
  - 배열 디스트럭처링 할당

- 이터러블 프로토콜
  - Well-known Symbol인 Symbol.iterator를 프로퍼티 키로 사용한 메서드를 직접 구현하거나
    프로토타입 체인을 통해 상속받은 Symbol.iterator 메서드를 호출하면 이터레이터 프로토콜을 준수한 이터레이터를 반환한다.
    - 이러한 프로토콜을 준수한 객체를 이터러블이라한다
  - 이터러블의 Symbol.iterator 메서드를 호출하면 이터레이터 프로토콜을 준수한 이터레이터를 반환한다
    - 이터레이터는 next 메서드를 소유하며, next 메서드를 호출하면 이터러블을 순회하며, value와 done 프로퍼티를 갖는 이터레이터 리절트 객체를 반환한다
      - 이러한 규약을 이터레이터 프로토콜이라 하며, 이터레이터 프로토콜을 준수한 객체를 이터레이터라 한다.
      - 이터레이터는 이터러블의 요소를 탐색하기 위한 포인터 역할을 한다.

### 34.1.1 이터러블

- 이터러블 : 이터러블 프로토콜을 준수한 객체
  - `Symbol.iterator를 프로퍼티 키로 사용`한 메서드를 직접 구현하거나
  - 프로토타입 체인을 통해 상속받은 객체

```js
const isIterable = (v) =>
  v !== null && typeof v[Symbol.iterator] === "function";
isIterable([]); // true
isIterable(""); // true
isIterable(new Map()); // true
isIterable(new Set()); // true
isIterable({}); // false
```

- 이터러블인지 확인 하는 함수
- object는 이터러블이 아니다
  - 배열 디스트럭처링 사용 불가
  - 하지만 일반 객체도 이터러블 프로토콜을 준수하도록 구현하면 이터러블이 된다

### 34.1.2 이터레이터

```js
const array = [1, 2, 3];
const iterator = array[Symbol.iterator]();
console.log("next" in iterator); // true
```

- in : The in operator returns true if the specified property is in the specified object or its prototype chain.

## 34.2 빌트인 이터러블

- Array
- String
- Map
- Set
- TypedArray
- arguments
- DOM 컬렉션

## 34.3 for ... of 문

- 이터러블을 순회하면서 이터러블의 요소를 변수에 할당한다

- for ... of vs. for ... in

  - for ... in

    - 모든 프로토타입의 프로퍼티 중에서 프로퍼티 어트리뷰트 [[Enumerable]]의 값이 true인 프로퍼티를 순회하며 열거(enumeration)한다
    - 이때 프로퍼티 키가 심벌인 프로퍼티는 열거하지 않는다

  - for ... of
    - 이터레이터의 next 메서드를 호출하여 이터러블을 순회한다
      - next메서드가 반환한 이터레이터 리절트 객체의 value 프로퍼티 값을 for ... of 문의 변수에 할당한다
      - next메서드가 반환한 이터레이터 리절트 객체의 done 프로퍼티 값이 false이면 계속 순회하고 true이면 순회를 중단한다

```js
for (const item of [1, 2, 3]) {
  console.log(item); // 1, 2, 3
}
```

```js
// for ... of 문의 내부 동작을 for문으로 표현
const iterable = [1, 2, 3];

const iterator = iterable[Symbol.iterator]();
for (;;) {
  const res = iterator.next();
  if (res.done) {
    break;
  }
  const item = res.value;
  console.log(item); // 1, 2, 3
}
```

## 34.4 이터러블과 유사 배열 객체

- `유사 배열 객체`는 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있고 `length 프로퍼티를 갖는 객체`
  - length프로퍼티를 갖기 때문에 `for문으로 순회할 수 있다`
  - 인덱스를 나타내는 숫자 형식의 문자열을 프로퍼티 키로 가지므로 배열 처럼 인덱스로 프로퍼티 값에 접근할 수 있다

```js
const arrayLike = {
  0: 1,
  1: 2,
  2: 3,
  length: 3,
};
// for문 사용가능
```

- 유사 배열 객체는 이터러블이 아닌 일반 객체이다

  - Symbol.iterator 메서드가 없기 때문이다
  - for ... of 문으로 순회할 수 없다

- 단, 유사배열 객체이면서 동시에 이터러블인 객체들

  - arguments, NodeList, HTMLCollection
  - 사실 이터러블이 ES6에서 도입되면서 위 객체들에 Symbol.iterator 메서드를 구현하여 이터러블이 되었다
  - 배열도 마찬가지로 이터러블이 도입되면서 Symbol.iterator를 구현하여 이터러블이 되었다

- Array.from 메서드는 유사배열객체 또는 이터러블을 인수로 전달받아 배열로 변환하여 반환한다

```js
const arrayLike = {
  0: 1,
  1: 2,
  2: 3,
  length: 3,
};
console.log(Array.from(arrayLike)); // [1, 2, 3]
```

## 34.5 이터레이션 프로토콜의 필요성

- object는 이터러블이 되지않은 이유는 배열 디스트럭처링과 구분하기 위해서일까?

- 이터러블 도입 전에 각자 나름의 방법으로 for문, for...in문(object), forEach 등 다양한 방법으로 순회하였으나
- 이터러블로 통일하여 for...of문, 스프레드 문법, 배열 디스트럭처링 할당의 대상으로 사용할 수 있도록 일원화했다
- 각각의 순회방식을 지원하기 보다 이터레이션 프로토콜만 지원하도록 구현해도 되도록 일원화 하기 위해
  - Symbol.iterator 메서드를 호출해 이터레이터를 생성하고
    이터레이터의 next메서드를 호출하여 리절트 객체의 value/done 프로퍼티값을 취득하기 위해
- 이터레이션 프로토콜은 하나의 순회방식을 갖도록 규정하기 위해
  - 데이터 소비자와 데이터 공급자를 연결하는 인터페이스 역할

## 34.6 사용자 정의 이터러블

### 34.6.1 사용자 정의 이터러블 구현

```js
// 피보나치 수열을 구현
const fibonacci = {
  [Symbol.iterator]() {
    let [pre, cur] = [0, 1];
    const max = 10;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return { value: cur, done: cur >= max };
      },
    };
  },
};

for (const num of fibonacci) {
  console.log(num); // 1, 2, 3, 5, 8
}
```

### 34.6.2 이터러블을 생성하는 함수

```ts
// 이터러블을 생성
const fibonacciFunc = function (max: number) {
  let [pre, cur] = [0, 1];
  return {
    [Symbol.iterator]() {
      const max = 10;
      return {
        next() {
          [pre, cur] = [cur, pre + cur];
          return { value: cur, done: cur >= max };
        },
      };
    },
  };
};

console.log([...fibonacciFunc(10)]); // [ 1, 2, 3, 5, 8 ]
```

## 결론

- 사실 이터러블은 어플리케이션 개발자가 사용하기 보단 엔지니어급의 개발자가 코어한 무언가를 만들 때 사용할 것 같다
- 개인적으로 잘 사용할 것 같지않고
- 편하게 Object 또는 Array를 사용할 것 같다
- Object의 경우 Object.keys, values, entries 같은 메서드들을 사용하면 Array.prototype의 메서드들과 체이닝할 수 있기 때문에
  - 이터러블을 직접 만들어서 무언가 할 것 같진 않다
