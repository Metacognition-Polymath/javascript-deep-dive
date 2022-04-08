# 31. RegExp

## 31.1 정규 표현식이란?

- 문자열을 대상으로 패턴 매칭 기능을 제공
- 특정 패턴과 일치하는 문자열을 검색하거나 추출 또는 치환할 수 있는 기능

```js
const tel = "010-1234-567팔";

const regExp = /^\d{3}-\d{4}-\d{4}$/;

// tel이 휴대폰 전화번호 패턴에 매칭하는지 테스트(확인)한다
regExp.test(tel); // => false
```

- 정규식은 가독성이 좋지 않지만 정규식을 사용하지 않는다면 조건문과 반복문으로 테스트를 해야한다
  - 정규식을 사용하자 !

## 31.2 정규 표현식의 생성

- 정규 표현식의 구성 : 패턴, 플래그

```js
const regExp = /^\d{3}-\d{4}-\d{4}$/i;
// 패턴 : / 과 / 사이에 있는 문자열
// 플래그 : 마지막 / 뒤에 있는 문자, i

// 예제 31-02
const target = "Is this all there is?";

const regex = /is/i;
// 패턴 : is
// 플래그 : i => 대소문자를 구별하지 않음
regex.test(target); // true
```

RegExp 생성자 함수를 사용하여 객체를 생성할 수도 있다

```js
new RegExp(pattern[, flag])

const regex = new RegExp(/is/i);

const count = (str, char) => {
  console.log(str.match(new RegExp(char, 'gi')));
  return (str.match(new RegExp(char, 'gi')) ?? []).length;
};

count("Is this all there is", "is"); // 3 <- ['Is', 'is', 'is']
count("Is this all there is", "xx"); // null
```

## 31.3 RegExp 메서드

- 같이 알면 좋은 메서드 : String.prototype.replace
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

#### 정규표현식을 사용하는 String의 메서드 -> match를 제외한 나머지는 String장에서 다룸

- String.prototype.replace
- String.prototype.search
- String.prototype.split
- String.prototype.match

```js
const target = "Is this all there is?";
const regExp = /is/;

// const result = regExp.exec(target);
// 있으면 => [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]
// 없으면 => null

// const result = regExp.test(target); // true

const regExpGlobal = /is/g;
// const result = target.match(regExp); // [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]
// regex의 exec와 같음

// const result = target.match(regExpGlobal); // [ 'is', 'is' ]

const result = regExpGlobal.exec(target); // g 플래그를 붙여도 하나만 나옴
// [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]
```

- 이럴거면 다 match 쓰지 exec를 잘 안쓰려고 할 듯
  - input, index 같은 것들이 필요하다면 쓸 듯

#### 정규표현식 메서드

- RegExp.prototype.exec
  - 인수로 전달 받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 배열로 반환. 없을 경우 null을 반환
  - 하나만 검색되면 바로 반환 (String.prototype.match는 플래그에 g가 있으면 모두 검색하여 결과로 반환)

```js
const target = "Is this all there is?";
const regExp = /is/;

regExp.exec(target);
// 있으면 => [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]
// 없으면 => null
```

- RegExp.prototype.test
  - 찾으면 true, 아니면 false

```js
const target = "Is this all there is?";
const regExp = /is/;

regExp.test(target); // true
```

## 31.4 플래그

- 플래그는 총 6개가 있는데 중요한 3개만 살펴보자 - 나머진 알아서 공부해야 할 듯

  - i : ignore case => 대소문자를 구별하지 않고 패턴을 검색한다
  - g : global => 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색한다
  - m : multi line => 문자열의 행이 바뀌더라도 패턴 검색을 계속한다

- 플래그는 여러개 적용 가능

## 31.5 패턴

### 임의의 문자열 검색 : `...`

```js
const target = "Is this all there is?한글도 잘리냐??";
const regExp = /.../g; // 그냥 공백 포함 3글자씩 자르는 거네 - 한글, 영어 모두 글자수 같은 것으로 취급

const result = target.match(regExp); // [ 'Is ', 'thi', 's a', 'll ', 'the', 're ', 'is?', '한글도', ' 잘리', '냐??' ]
```

### 반복 검색

```js
const target = "A AA B BB Aa Bb AAA"; // AAA는 AA와 A로 쪼개져서 둘다 나옴
const regExp = /A{1,2}/g;
// 'A'가 최소 1번, 최대 2번 반복 되는 문자열을 전역 검색한다

const result = target.match(regExp); // [ 'A', 'AA', 'A', 'AA', 'A' ]

console.log(result);
```

### QR 검색

#### |는 or의 의미를 갖는다 /A|B/는 'A' 또는 'B'를 의미한다

```js
const target = "A AA B BB Aa Bb";
const regExp = /A|B/g;
// 'A'가 최소 1번, 최대 2번 반복 되는 문자열을 전역 검색한다

const result = target.match(regExp); // [ 'A', 'A', 'A', 'B', 'B', 'B', 'A', 'B' ]

console.log(result);
```

#### 분해되지 않은 단어 레벨로 검색하기 위해서는 +를 함께 사용한다

- `+` : 한개 이상인 것을 선택

```js
const target = "A AA B BB Aa Bb";
const regExp = /A+|B+/g;
// 'A'가 최소 1번, 최대 2번 반복 되는 문자열을 전역 검색한다

const result = target.match(regExp); // [ 'A', 'AA', 'B', 'BB', 'A', 'B' ]

console.log(result);
```

#### `[]` 내 문자는 or로 동작한다

- `[]+`는 패턴을 한번 이상 반복한다

```js
const target = "A AA B BB Aa Bb";
const regExp = /[AB]+/g; // == /A+|B+/g;

const result = target.match(regExp); // [ 'A', 'AA', 'B', 'BB', 'A', 'B' ]

console.log(result);
```

- 범위를 지정하려면 [] 안에서 `-`를 사용한다

```js
const target = "A AA B TT ZZ Aa Bb";
const regExp = /[A-Z]+/g;

const result = target.match(regExp); // [ 'A', 'AA', 'BB', 'Aa', 'Bb' ]

console.log(result);
```

- 숫자를 검색하는 방법은 다음과 같다

```js
const target = "AA BB 12,345";
const regExp = /[0-9]+/g;

const result = target.match(regExp); // [ '12', '345' ]
```

```js
const target = "AA BB 12,345";
const regExp = /[0-9,]+/g; // '0' ~ '9' 또는 ',' 가 한 번 이상 반복되는 문자열을 전역 검색

const result = target.match(regExp); // [ '12,345' ]

console.log(result);
```

```js
/[\d,]+/g; // 숫자 + 콤마
/[\D,]+/g; // 숫자가 아닌 문자 + 콤마
```

- \d : 숫자
- \D : 숫자가 아닌 문자

```js
/[\w,]+/g; // \w는 [A-Za-z0-9_]와 같다 : 알파벳, 숫자, 언더스코어
/[\W,]+/g; // \W는 \W와 반대로 동작한다
```

#### NOT 검색

```js
/^[0-9]+/g; // 숫자를 제외한 나머지 검색
```

#### 시작 위치에서 검색

- `[...]` 안에서 `^` 는 not의 의미를 갖는다

```js
const target = "https://www.taehwango.info";
const regExp = /^https/;
regExp.test(target);
```

- `[...]` 밖에서 `^`는 시작을 의미한다

#### 마지막 위치에서 검색

- $는 문자열의 마지막을 의미한다

```js
const target = "https://www.taehwango.info";
const regExp = /.info$/;
regExp.test(target);
```

## 31.6 자주 사용하는 정규표현식

#### 특정 단어로 시작하는 검사

- http:// 또는 https:// 로 시작하는지 검사한다

```js
/^https?:\/\//;
```

- ^ : 문자열의 시작
- ? : 패턴이 최대 한번이상 반복되는지를 의미
  - http + s도 찾을 수 있음

```js
/^(http|https):\/\//;
```

#### 특정 단어로 끝나는지 검사

- html로 끝나는지 검사한다

```js
/html$/;
```

#### 숫자로만 이루어진 문자열인지 검사

```js
/^\d+$/;
```

- 숫자(\d)가 반복(+) 되는데 처음(^)도 숫자이고 끝($)도 숫자

#### 하나 이상의 공백으로 시작하는지 검사

```js
/^\s+/;
```

#### 아이디로 사용가능한지 검사

- 문자열이 알파벳 - 대소문자 - 또는 숫자로 시작하고 끝나며 4~10자리인지 검사

```js
/^[A-Za-z0-9]{4,10}$/;
```

- {4,10} : 앞의 패턴이 최소 4번, 최대 10번 반복되는 문자열을 찾음

#### 메일 주소 형식에 맞는지 검사

- 인터넷 메시지 형식 규약(RFC 5322)에 맞는 정교한 패턴 매칭이 필요하다면..

```js
/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
```

#### 핸드폰 번호 형식에 맞는지 검사

```js
/^\d{3}-\d{3,4}-\d{4}$/;
```

#### 특수 문자 포함 여부 검사

```js
/[^A-Za-z0-9]/gi;
```

- 패턴 문자를 제외한 나머지 문자를 검사

```js
/[\{\}\[\]\/\?.,;:|)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
```

- 또는 특수문자들을 패턴에 넣어서 선택적으로 검사할 수도 있음

```js
const targetString = "hello world!! @@ Tony";
const regex = /[^A-Za-z0-9]/gi;
const result = targetString.replace(regex, "");
console.log(result); // helloworldTony
```
