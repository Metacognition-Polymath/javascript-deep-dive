# 35. 스프레드 문법

- 스프레드 문법(spread syntax - 전개 문법) : 하나로 뭉쳐있는 여러 값들의 집합을 펼쳐서 개별적인 값들의 목록으로 만든다
- 스프레드 문법을 사용할 수 있는 대상

  - Array, String, Map, Set, DOM 컬렉션(NodeList, HTMLCollection), arguments
  - for...of문으로 순회할 수 있는 이터러블

- 스프레드 문법의 결과물은 값으로 사용할 수 없고,
  쉼표로 구분한 값의 목록을 사용하는 문맥에서만 사용 가능
  - 함수 호출문의 인수 목록
  - 배열 리터럴의 요소 목록
  - 객체 리터럴의 프로퍼티 목록

```js
// Error
const list = ...[1, 2, 3]; // SyntaxError
```

## 35.1 함수 호출문의 인수 목록에서 사용하는 경우

```js
const arr = [1, 2, 3];
const max = Math.max(...arr);
console.log(max); // 3
```

## 35.2 배열 리터럴 내부에서 사용하는 경우

```js
const arr1 = [1, 4];
const arr2 = [2, 3];
arr1.splice(1, 0, ...arr2);
console.log(arr1); // [1, 2, 3, 4]
```

```js
{
  // 배열 복사 ES5
  const origin = [1, 2];
  const copy = origin.slice();
  console.log(copy); // [1, 2]
}
{
  // 배열 복사 ES6
  const origin = [1, 2];
  const copy = [...origin];
  console.log(copy); // [1, 2]
}
```

## 35.3 객체 리터럴 내부에서 사용하는 경우

```js
const obj = { x: 1, y: 2 };
const copy = { ...obj };
```

- 스프레드 프로퍼티는 Object.assign 메서드를 대체할 수 있는 간편한 문법이다
- 얕은 복사
