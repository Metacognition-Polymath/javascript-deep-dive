# 41. 타이머

## 41.1 호출 스케줄링

- 싱글 스레드
  - 비동기 처리 방식으로 동작

## 41.2 타이머 함수

### setTimeout

setTimeout의 콜백함수에 전달해야할 인수가 존재하는 경우

- 3번째 이후 인자를 통해 전달할 수 있다
- clearTimeout 에서 setTimeout의 아이디를 호출해서 취소할 수 있음

```js
const timerId = setTimeout(() => console.log("Hi!"), 1000);
clearTimeout(timerId); // setTimeout의 delay, 1000ms, 가 되기 전에 clearTimeout을 호출하면 취소할 수 있다
```

### setInterval / clearInterval

- 두 번째 인수로 전달 받은 시간마다 반복 동작하는 타이머를 생성
- clearInterval로 setInterval의 반환값인 아이디를 홒출해서 취소 가능

```js
let count = 1;
const timeoutId = setInterval(() => {
  console.log(count);
  if (count++ === 5) {
    clearInterval(timeoutId);
  }
}, 1000);
```

## 41.3 디바운스와 스로틀

```js
const $button = document.querySelector("button");
const $normalMsg = document.querySelector(".normal-msg");
const $debounceMsg = document.querySelector(".debounce-msg");
const $throttleMsg = document.querySelector(".throttle-msg");

const debounce = (callback, delay) => {
  let timerId;
  return (event) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(callback, delay, event);
  };
};

const throttle = (callback, delay) => {
  let timerId;
  return (event) => {
    if (timerId) {
      return;
    }
    callback(event);
    timerId = setTimeout(
      () => {
        timerId = null;
      },
      delay,
      event
    );
  };
};

$button.addEventListener("click", () => {
  $normalMsg.textContent = +$normalMsg.textContent + 1;
});

$button.addEventListener(
  "click",
  debounce(() => {
    $debounceMsg.textContent = +$debounceMsg.textContent + 1;
  }, 500)
);

$button.addEventListener(
  "click",
  throttle(() => {
    $throttleMsg.textContent = +$throttleMsg.textContent + 1;
  }, 500)
);
```

- debounce

  - 짧은 시간 연속으로 발생하면 이벤트 핸들러를 호출하지 않다가 일정 시간이 경과한 이후에 이벤트 핸들러가 한 번만 호출되도록 한다
  - 즉, 디바운스는 짧은 시간간격으로 발생하는 이벤트를 그룹화해서 마지막에 한번만 이벤트 핸들러가 호출되도록 한다
  - 실무에선 lodash의 debounce 함수를 사용하는 것을 권장

- throttle
  - 한번 실행 후 일정시간동안 실행을 막는 것
  - 실무에선 lodash의 throttle 함수를 사용하는 것을 권장
