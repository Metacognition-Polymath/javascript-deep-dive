# 36. 디스트럭처링 할당

- 디스트럭처링 할당(destructuring assignment) == 구조분해 할당
- 구조화된 배열과 같은 이터러블 또는 객체를 destructuring하여 1개 이상의 변수에 개별적으로 할당하는 것
- 이터러블 또는 객체 리터럴에서 필요한 값만 추출하여 변수에 할당할 때 유용하다

## 36.1 배열 디스트럭처링 할당

```js
const arr = ["aa", "bb", "cc"];

const [a, b, c] = arr;

console.log(a, b, c); // 'aa', 'bb', 'cc'
```

```js
// Rest 요소
const [x, ...y] = [1, 2, 3];
console.log(y); // [2, 3]
```

## 36.2 객체 디스트럭처링 할당

```js
const user = {
  firstName: "Taehwan",
  lastName: "Go",
};
const { lastName, firstName } = user; // 순서상관없이 꺼낼 수 있다
```

- 객체에서 프로퍼티 키로 `필요한 프로퍼티 값만 추출`하여 변수에 할당하고 싶을 때 유용하다

```js
// 중첩 객체인 경우
const user = {
  name: "Tony",
  address: {
    zipCode: "03068",
    city: "Seoul",
  },
};

const {
  address: { city },
} = user;
console.log(city); // "Seoul"
```

```js
// Rest 프로퍼티도 사용 가능하다
// 반드시 마지막에 위치해야 한다
const { x, ...rest } = { x: 1, y: 2, z: 3 };
console.log(rest); // { y: 2, z: 3 }
```
