# 27. 배열

## 27.1 배열이란?

- 여러개의 값을 순차적으로 나열한 자료구조

```js
const arr = [1, 2, 3];

typeof arr; // object
```

- 배열인지 확인 : Array.isArray

- 배열 vs 객체

| 구분            | 객체                      | 배열          |
| --------------- | ------------------------- | ------------- |
| 구조            | 프로퍼티 키와 프로퍼티 값 | 인덱스와 요소 |
| 값의 참조       | 프로퍼티 키               | 인덱스        |
| 값의 순서       | 없음                      | 있음          |
| length 프로퍼티 | 없음                      | 있음          |

## 27.2 자바스크립트 배열은 배열이 아니다

- 자바스크립트 배열은 해시 테이블로 구현된 객체
  - 인덱스 요소로 접근하는 경우, 일반적인 배열보다 성능적인 면에서 느릴 수 밖에 없는 구조적인 단점이 있다
  - 하지만 특정 요소를 검색하거나 요소를 삽입 또근ㄴ 삭제하는 경우에는 일반적이 배열보다 빠른 성능을 기대할 수 있다
  - 모던 자바스크립트 엔진은 배열은 최적화하여 일반 객체보다 2배 정도 빠르다

## 27.3 length 프로퍼티와 희소 배열

- 희소배열은 사용하지 않는 것이 좋다
- 같은 타입의 요소를 연속적으로 위치시키는 것이 최선이다

## 27.4 배열 생성

- []
- new Array()
- Array : Array 생성자 함수는 new 연산자와 호출하지 않더라도 배열을 생성하는 생성자 함수로 동작한다
  - Array 생성자 함수 내부에서 new.target을 확인하기 때문

#### 27.4.4 Array.from

```js
Array.from({ length: 3 }, (_, i) => i);
```

- 두 번째 인수로 전달한 콜백 함수의 반환값으로 구성된 배열을 반환한다

#### 유사 배열 객체와 이터러블 객체

- 이터러블 객체(iterable object)는 Symbol.iterator 메서드를 구현하여 for...of문으로 순회할 수 있으며,
  - 스프레드 문법, 배열 디스트럭처링 할당의 대상으로 사용할 수 있는 객체를 말한다
- Array, String, Map, Set, Dom 컬렉션(NodeList, HTMLCollection), arguments 등

## 27.5 배열 요소의 참조

- 존재하지 않는 프로퍼티에 접근했을 때 undefined를 반환

## 27.6 배열 요소의 추가와 갱신

```js
const arr = [0, 1];

arr[100] = 100;
// => [0, 1, empty * 98, 100]
```

- 명시적으로 할당하지 않은 요소는 생성되지 않는다

## 27.7 배열 요소의 삭제

- delete로도 할 수 있지만 희소배열(empty를 남김)이 되므로
- Array.prototype.splice 메서드를 이용하자

```js
const arr = [1, 2, 3];

arr.splice(1, 1); // arr[1] 부터 1개의 요소를 제거
```

## 27.8 배열 메서드

- 두 가지 부류

  - 배열 메서드는 원본배열을 직접 변경하는 메서드

    - Array.prototype.push
    - Array.prototype.pop
    - Array.prototype.unshift : 앞쪽에 추가하고 변경된 length를 반환
      - unshift 메서드는 원본을 변경하므로 스프레드 문법을 사용하는 것 좋다
    - Array.prototype.shift : 맨앞의 요소를 제거하고 제거한 요소를 반환한다, 빈배열이면 undefined를 반환한다
    - Array.prototype.splice
    - Array.prototype.reverse : 순서를 뒤집음
    - Array.prototype.fill : 채운다

  - 원본 배열을 직접 변경하지 않고 새로운 배열을 생성하여 반환하는 메서드

    - Array.prototype.slice : 인수로 전달된 범위의 요소들을 복사하여 배열로 반환한다
      - 복사본은 얕은 복사를 통해 생성된다
        - 얕은 복사 : 한 단계만 복사
        - 깊은 복사 : 중첩된 단계를 모두 복사
    - Array.prototype.concat : 원본 배열 변경 없이 배열을 합친다

    ```js
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    const result = arr1.concat(arr2); // [1, 2, 3, 4]
    ```

- Array.isArray
- Array.prototype.indexOf : 찾은 뒤 해당 인덱스를 반환
- Array.prototype.includes

- 배열에서 특정 요소 제거

  - 첫 번째 것만 제거 : indexOf + splice
  - 모두 제거 : filter

- Array.prototype.join

  - 문자열로 붂음, 기본 구분자는 콤마이다

- Array.prototype.flat
  - 인수로 전달한 깊이만큼 재귀적으로 배열을 평탄화 한다

```js
// const result = [1, [2, [3]]].flat(); // default : 1단계 => [1, 2, [3]]
// const result = [1, [2, [3]]].flat(2); // [1, 2, 3]
const result = [1, [2, [3]]].flat(Infinity); // [1, 2, 3]
console.log(result);
```

- Array.prototype.flatMap

```js
const arr = ["hello", "world"];

// flatMap은 map을 통해 생성된 새로운 배열을 1단계만 평탄화 한다
arr.flatMap((x) => x.split(""));
// 2단계 이상 평탄화해야되는 경우 map과 flat을 각각 호출한다
```

## 27.9 배열 고차 함수
