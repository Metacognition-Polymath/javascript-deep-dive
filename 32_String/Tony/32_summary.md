# 32. String

## 32.1 String 생성자 함수

- new 연산자와 함께 String 생성자 함수를 호출하면 String 래퍼 객체가 생성 됨

```js
const strObj = new String("Tony");
console.log(strObj); // { [Iterator]  0: 'T', 1: 'o', 2: 'n', 3: 'y' }
```

- new 연산자를 사용하지 않고 String생성자에 argument를 넘겨서 명ㅅ적으로 타입을 변환할 수도 있다

```js
String(1); // "1"
```

## 32.2 length 프로퍼티

- 문자열의 개수를 반환

```js
"Hello".length; // 5
```

## 32.3 String 메서드

- String객체는 원본을 직접 변경하는 메서드는 존재하지 않는다.
- 문자열은 변경 불가능(immutable)한 원시 값이기 때문에 String 래퍼 객체도 읽기 전용 객체로 제공된다

### String.prototype.indexOf

- 문자열을 검색해서 찾은 첫 번째 인덱스를 반환한다 - 인덱스는 0부터 시작
- 검색에 실패하면 -1을 반환한다

```js
const str = "Hello World";
str.indexOf("l"); // 2
str.indexOf("or"); // 7
```

- String.prototype.includes 메서드를 사용하여 찾을 수도 있다

```js
if (str.includes("Hello")) {
  // some codes...
}
```

### String.prototype.search

- 대상 문자열에서 인수로 전달 받은 정규 표현식과 매치하는 문자열을 검색하여 일치하는 문자열의 인덱스를 반환한다
- 검색에 실패하면 -1을 반환한다
- indexOf랑 똑같네

```js
const str = "Hello World";

str.search(/o/); // 4
```

### String.prototype.includes

- 문자열이 있는지 없는지 확인하여 boolean을 반환한다

```js
const str = "Hello world";

str.includes("Hello"); // true
```

### String.prototype.startsWith

- 대상 문자열이 인수로 전달 받은 문자열로 시작하는지 확인하여 그 결과를 true, false로 반환한다

```js
const str = "Hello world";

str.startsWith("He"); // true
```

### String.prototype.endsWith

- 대상 문자열이 인수로 전달 받은 문자열로 끝나는지 확인하여 그결과를 boolean으로 반환

```js
const str = "Hello world";

str.startsWith("ld"); // true
```

### String.prototype.charAt

- 대상 문자열에서 인수로 전달 받은 인덱스에 위치한 문자를 반환한다

```js
const str 'Hello';

str.charAt(1); // e
```

- 범위를 벗어난 경우 빈 문자열을 반환한다

### String.prototype.substring

- 대상 문자열에서 첫 번째 인수로 전달받은 인덱스에 위치하는 문자부터
  두번째 인수로 전달 받은 인덱스에 위치하는 문자의 바로 이전까지의 부분 문자열을 반환한다

```js
const str = "Hello World";

str.substring(1, 4); // ell
```

- 두 번째 인수를 생략하는 경우엔 첫 번째 인수부터 마지막 문자까지의 문자열을 반환

- indexOf와 함께 사용하면 특정 문자열을 기준으로 앞뒤에 위치한 부분 문자열을 취득할 수 있다

```js
const str = "Hello World";
str.substring(0, str.indexOf(" ")); // "Hello"
str.substring(str.indexOf(" ") + 1, str.length); // "World"
```

### String.prototype.slice

- substring메서드와 동일하게 동작
- 음수 인수도 전달 가능, 음수 인수의 경우 뒤에서 부터 문자열을 잘라 냄

### String.prototype.toUpperCase

- 대상 문자열을 모두 대문자로 변경한 문자열을 반환

### String.prototype.toLowerCase

- 모두 소문자로 변경한 문자열을 반환

```js
const str = "Hello World";

str.toUpperCase(); // HELLO WORLD
str.toLowerCase(); // hello world
```

### String.prototype.trim

- 대상 문자열 앞뒤에 공백 문자가 있을 경우 이를 제거한 문자열을 반환한다
- 이건 진짜 개꿀이다 !

```js
const str = "     foo      ";
str.trim(); // 'foo'
```

- trimStart, trimEnd를 사용하면 앞 또는 뒤 선택적으로 공백을 제거할 수 있다

- String.prototype.replace 메서드에 정규 표현식을 인수로 전달하여 공백 문자를 제거할 수도 있다

```js
const str = "     foo      ";
str.replace(/\s/g, ""); // 'foo'
str.replace(/^\s+/g, ""); // 'foo    '
str.replace(/\s+$/g, ""); // '     foo'
```

### String.prototype.repeat

- 대상 문자열 -> 인수로 전달받은 정수만큼 반복
  - 인수 : 0 => '', 음수 => RangeError
  - 인수 생략시 기본값은 0

```js
const str = "abc";

str.repeat(); // ''
str.repeat(2); // 'abcabc'
```

### String.prototype.replace

- 대상문자열 -> 첫번째 인수 문자열(또는 정규표현식)을 검색하여 두번째 인수로 전달한 문자열로 치환한 문자열을 반환

```js
const str = "Hello World";
str.replace("World", "Tony"); // Hello Tony
```

```js
const str = "Hello World World";
str.replace("World", "Tony"); // Hello Tony World
```

- 여러개 일 경우 첫 번째로 검색된 문자열만 치환
  - 정규식과 g플래그를 사ㅛㅇ하면 모두 치환 가능
- 두 번째 인자로 문자열이 아닌 replacer 함수를 전달할 수도 있음

  - 예제 32-37 (책)

- 특수 패턴도 사용가능 : $& 는 검색된 문자열을 의미
  - 안되는 듯

### String.prototype.replaceAll

- 정규식을 사용하지 않고도 모두 찾아서 치환 가능

### String.prototype.split

- 대상 문자열에서 첫 번째로 전달한 문자열 또는 정규표현식을 검색하여 문자열을 분리한 후
  분리된 문자열로 이루어진 배열을 반환

```js
const str = "How are you?";
const result = str.split(" "); // 공백을 구분자로 사용하여 구분후 배열로 반환
console.log(result); // ['How', 'are', 'you']
```
