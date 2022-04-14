# 37. Set과 Map

## 37.1 Set

- Set 객체는 중복되지 않은 유일한 값들의 집합(set)이다.
- Set 객체는 `배열과 유사`하지만 다음과 같은 차이가 있다

| 구분                                | 배열 | Set객체 |
| ----------------------------------- | ---- | ------- |
| 동일한 값을 중복하여 포함할 수 있다 | O    | X       |
| 요소 순서에 의미가 있다             | O    | X       |
| 인덱스로 요소에 접근할 수 있다      | O    | X       |

### 37.1.1 Set 객체의 생성

- 이터러블을 인수로 전달 받아 Set 객체를 생성한다.
- 이때 이터러블의 중복된 값은 Set 객체에 요소로 저장되지 않는다.
- 중복 허용 안됨

#### 중복 제거

```js
// 배열의 중복 제거 - 방법 1
const unique = (array) => array.filter((v, i, self) => self.indexOf(v) === i);

// 배열의 중복 제거 - 방법 2
const unique = (array) => [...new Set(array)];
```

### 37.1.2 요소 개수 확인

- Set.prototype.size 를 사용

```js
const { size } = new Set([1, 2, 3, 3]); // 중복이 제거 돼서 3개가 된다
console.log(size); // 3
```

### 37.1.3 요소 추가

- Set.prototype.add

```js
const set = new Set();
set.add(1);
console.log(set); // Set(1) {1}
set.add(2).add(3); // 체이닝 가능
```

- add 메서드는 새로운 요소가 추가된 Set 객체를 반환한다. 따라서 add 메서드를 호출한 후 체이닝을 할 수 있다.

- (NaN과 NaN => 원랜 false), (+0, -0 => 원래 true) 의 중복을 허용하지 않는다

```js
const set = new Set();
set
  .add(1)
  .add("a")
  .add({})
  .add([])
  .add(() => {});
```

- Set 객체는 객체나 배열과 같이 자바스크립트의 모든 값을 요소로 저장할 수 있다

### 37.1.4 요소 존재 여부 확인

```js
const set = new Set([1, 2]);
set.has(2); // true
```

- Set.prototype.has 메서드로 확인 가능 => boolean

### 37.1.5 요소 삭제

- 특정 요소를 삭제하려면 Set.prototype.delete 메서드를 사용
- delete 메서드는 삭제 성공 여부를 나타내는 불리언 값을 반환
  - delete 메서드 사용 시 인덱스가 아닌 `요소값을 인수`로 전달해야 함
- Set 객체는 순서에 의미가 없다
  - 배열과 같이 인덱스를 갖지 않는다

### 37.1.6 요소 일괄 삭제

- Set.prototype.clear
  - 일괄삭제 후 언제나 undefined 값을 반환한다

### 37.1.7 요소 순회

- Set.prototype.forEach

```js
const set = new Set([1, 2, 3]);

set.forEach((v, v2, set) => console.log(v, v2, set)); // v와 v2는 같은 값인데 배열의 메서드와 통일하기 위해 의미없는 두번째 인자가 추가 됨
```

- 그 외
  - for ... of로 순회가능(이터러블이기 때문)
  - 스프레드 문법과 배열 디스트럭쳐링의 대상이 될 수 있다

### 37.1.8 집합 연산

- Set 객체는 수학적 집합을 구현하기 위한 자료구조다(? 그런거였어?)

  - 교집합, 합집합, 차집합 등을 구현할 수 있다

#### 교집합

```js
// 교집합을 빌트인 Set의 프로토타입에 직접 구현
Set.prototype.intersection = function (set) {
  return new Set([...this].filter((v) => set.has(v)));
};
```

#### 합집합

```js
// 합집합을 구현
Set.prototype.union = function (set) {
  return new Set([...this, ...set]);
};
```

#### 차집합

```js
Set.prototype.difference = function (set) {
  return new Set([...this].filter((v) => !set.has(v)));
};
```

#### 부분집합과 상위 집합

```js
Set.prototype.isSuperset = function (subset) {
  const supersetArr = [...this];
  return [...subset].every((v) => supersetArr.includes(v));
};

const setA = new Set([1, 2, 3]);
const setB = new Set([2, 3]);

console.log(setA.isSuperset(setB)); // true
```

- 중복검사를 위한게 아니라면 set이 아니여도 될 것 같다

## 37.2 Map

- Map 객체는 키와 값의 쌍우로 이루어진 컬렉션이다.
- Map 객체는 객체와 유사하지만 아래와 같은 차이가 있다.

| 구분                   | 객체                    | Map 객체              |
| ---------------------- | ----------------------- | --------------------- |
| 키로 사용할 수 있는 값 | 문자열 또는 심벌        | 객체를 포함한 모든 값 |
| 이터러블               | X                       | O                     |
| 요소 개수 확인         | Object.keys(obj).length | map.size              |

### 37.2.1 Map 객체의 생성

- 중복되면 나중에 추가된 것으로 덮어쓰기 된다.
- `이터러블`을 인수로 받아서 생성한다.
  - Object는 이터러블이 아니다

### 37.2.2 요소 개수 확인

- Map.prototype.size 프로퍼티를 사용해서 개수를 확인 할 수 있다

### 37.2.3 요소 추가

- Map.prototype.set

```js
const map = new Map();
map.set("key1", "value1").set("key2", "value2"); // 체이닝도 가능하다
```

- Set과 마찬가지로 NaN 중복 안됨, 0과 +0도 중복 안됨
- 모든 타입을 키로 사용 가능
  - 하지만 Object 타입같이 레퍼런스 타입으로 된 키는 찾을 수 없음.. WTF?
    - 미리 선언한 object instance의 식별자를 건네서 찾는건 가능

### 37.2.4 요소 취득

- Map.prototype.get(key)
  - 존재하지 않으면 undefined

### 37.2.5 요소 존재 여부 확인

- Map.prototype.has(key) => boolean

### 37.2.6 요소 삭제

- Map.prototype.delete(key) => boolean

### 37.2.7 요소 일괄 삭제

- Map.prototype.clear => 항상 undefined

### 37.2.8 요소 순회

- Map.prototype.forEach

```js
const map = new Map([
  ["tony", "dev"],
  ["taehwan", "go"],
]);
map.forEach((v, k, map) => console.log(v, k, map));
// 첫 번째 인수(v) : 현재 순회 중인 요소 값(value)
// 두 번째 인수(k) : 현재 순회 중인 요소 키(key)
// 세 번째 인수(map) : 현재 순회 중인 Map 객체 자체(인스턴스)
```

- Map도 이터러블다
  - for ... of
  - 스프레드 문법
  - 배열 디스트럭처링

#### Map 메서드

- Map.prototype.keys
- Map.prototype.values
- Map.prototype.entries
  - Object의 메서드들과 동일
