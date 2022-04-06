# 30. Date

- 표준 빌트인 객체 + 생성자 함수
- Date는 날짜와 시간을 위한 메서드를 제공한다
- 현재 날짜 및 시간은 코드가 실행된 시스템의 시계에 의해 결정된다(os 따라 가는 듯)

## 30.1 Date 생성자 함수

- Date 객체는 내부적으로 날짜와 시간을 나타내는 정수값을 갖는데
  이 값은 1970년 1월 1일 (UTC)를 기점으로 Date객체가 나타내는 날짜와 시간까지의 밀리초를 나타낸다

### Date 생성자 함수로 객체를 생성하는 4가지 방법

#### 30.1.1 new Date()

- 생성한 date 객체는 내부적으로 정수 값을 갖지만 콘솔에 출력하면 기본적으로 날짜와 시간 정보를 출력한다

#### 30.1.2 new Date(milliseconds)

- 밀리초를 인수로 전달하면 전달된 밀리초만큼 경과한 날짜와 시간을 나타내는 Date객체를 반환한다
- 86,400,000ms는 1day를 의미한다
- 1000ms _ 60s _ 60m \* 24h => 86,400,000ms (1day)

#### 30.1.3 new Date(dateString)

- 날짜와 시간을 나타내는 문자열을 인수로 전달하면 객체를 반환
- 이때 인수로 전달한 문자열은 Date.parse 메서드에 의해 해석 가능한 형식이어야 한다

#### 30.1.4 new Date(year, month[day, hour, minute, second, millisecond])

## 30.2 Date 메서드

- Date.now
  - 1970/1/1 UTC을 기점으로 현재 시간까지 경과한 밀리초
- Date.parse
  - 밀리초 숫자로 변환
- Date.UTC
  - 밀리초 숫자로 반환

```js
const today = new Date(); // Wed Apr 06 2022 22:32:05 GMT+0900 (Korean Standard Time)
today.getFullYear(); // 2022
```

- Date.prototype.getFullYear
  - 년도를 나타내는 정수를 반환
- Date.prototype.setFullYear
  - 연도 설정
- Date.prototype.getMonth : 날짜(1 ~ 31)
- Date.prototype.setMonth
- Date.prototype.getDate
- Date.prototype.setDate
- Date.prototype.getDay : 요일을 나타내는 정수
  - 0 : 일요일, 3 : 수요일, 6: 토요일
- Date.prototype.getHours : 시간 (0 ~ 23)
- Date.prototype.setHours
- Date.prototype.getMinutes : 분 (0 ~ 59)
- Date.prototype.setMinutes
- Date.prototype.getSeconds
- Date.prototype.setSeconds
- Date.prototype.getMilliseconds : (0 ~ 999)
- Date.prototype.setMilliseconds
- Date.prototype.getTime : 1970/1/1 기점으로 부터 경과된 밀리초
- Date.prototype.getTimezoneOffset
  - UTC와 Date 객체에 지정된 locale 시간과의 차이를 분단위로 반환
- Date.prototype.toString
- Date.prototype.toDateString
  - 사람이 읽을 수 있는 형식의 문자열로 Date 객체의 날짜를 반환 - default 반환 값
- Date.prototype.toTimeString
- Date.prototype.toISOString
  - ISO 8601 형식으로 Date 객체의 날짜와 시간을 표현한 문자열을 반환

```js
new Date("2022/04/06 22:44").toISOString(); // 2022-04-06T13:44:00.000Z
```

- Date.prototype.toLocaleString
  - 생략 시 브라우저가 동작 중인 시스템의 로캘을 적용

```js
new Date("2022/04/06 22:44").toLocaleString(); // 4/6/2022, 10:44:00 PM
new Date("2022/04/06 22:44").toLocaleString("ko"); // 2022. 4. 6. 오후 10:44:00
```

## 30.3 Date를 활용한 시계 예제

```ts
function printNow() {
  const today = new Date();
  const dayNames = [
    "(일요일)",
    "(월요일)",
    "(화요일)",
    "(수요일)",
    "(목요일)",
    "(금요일)",
    "(토요일)",
  ];

  const day = dayNames[today.getDay()];

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  const ampm = hour >= 12 ? "PM" : "AM";

  // 12시간제로 변경
  hour %= 12;
  hour = hour || 12; // 0이면 12를 할당

  // 10 미만인 분과 초를 2자리로 변경
  minute = minute < 10 ? +("0" + minute) : minute;
  second = second < 10 ? +("0" + second) : second;

  const now = `${year}년 ${month}월 ${date}일 ${day} ${hour}:${minute}:${second} ${ampm}`;

  console.log(now);
}

const time = setInterval(printNow, 1000);

setTimeout(() => {
  clearInterval(time);
}, 10000);
```
