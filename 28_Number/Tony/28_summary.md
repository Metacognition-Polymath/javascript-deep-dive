# 28. Number

## 28.1 Number 생성자 함수

```js
const numObj = new Number(1);
console.log(numObj); // Number {[[PrimitiveValue]]: 10}
```

new 연산자 없이 Number 생성자 함수를 호출하면 인스턴스가 아닌 숫자를 반환

- 타입 변환용으로 사용 가능

```js
Number("0"); // 0
```

## 28.2 Number 프로퍼티

#### Number.EPSILON

- 1과 1보다 큰 숫자 중에서 가장 작은 숫자와의 차이
- 2.22 \* 10^(-16)

```js
0.1 + 0.2 => 0.300000000000004
0.1 + 0.2 === 0.3 // false

function isEqual(a, b) {
  // a와 b를 뺀 절대값이 입실론보다 작응면 같은 수로 인정한다
  return Math.abs(a - b) < Number.EPSILON;
}
```

#### Number.MAX_VALUE

- 자바스크립트에서 표현할 수 있는 가장 큰 양수 값
- 이것보다 큰 숫자는 Infinity 다.

#### Number.MIN_VALUE

- 자바스크립트에서 가장 작은 ㅇ양수 값
- 이것보다 작은 숫자는 0이다

#### Number.MAX_SAFE_INTEGER

- 자바스크립트에서 안전하게 표현할 수 있는 가장 큰 정수 값

#### Number.MIN_SAFE_INTEGER

- 안전하게 표현할 수 있는 가장 작은 음의 정수 값

## 28.3 Number 메서드

#### Number.isNaN

- NaN 이면 true

빌트인 isNaN과 차이점 : 암묵적 타입변환을 하지 않음

#### Number.prototype.toExponential

- 지수표기법 문자열로 반환
- (77).toExponential => "7.7e+1"

#### Number.prototype.toFixed

- 숫자를 반올림하여 문자열로 반환
- (12345.6789).toFixed() => "12346"
- (12345.6789).toFixed(2) => "12345.68" // 둘째짜리 까지 표시

#### Number.prototype.toString

- 10진수를 n 진법 수로 변환
- (16).toString(2); // "10000" // 10진수 16이 2진수로 변환되어 "10000"이 됨
