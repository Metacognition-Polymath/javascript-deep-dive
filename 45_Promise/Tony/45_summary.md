# 45. Promise

## 45.1 비동기 처리를 위한 콜백 패턴의 단점

## 45.2 프로미스의 생성

## 45.3 프로미스의 후속 처리 메서드

## 45.4 프로미스의 에러 처리

## 45.5 프로미스 체이닝

## 45.6 프로미스의 정적 메서드

- Promise.reject 사용 예

  - https://yamoo9.github.io/axios/guide/interceptors.html

- Promise.all 메서드는 인수로 전달 받은 이터러블의 요소가 프로미스가 아닌 경우

  - Promise.resolve 메서드로 래핑해서 반환한다

- Promise.all

  - 모두가 다 완료될 때 까지 기다림

- Promise.race

  - 여러 비동기를 병렬로 진행시켜서 먼저 도착한거 하나만 응답으로 실행, 나머진 무시

- Promise.allSettled
  - 중간에 실패하더라도 끝까지 진행 후 성공 실패를 모두 담음
    - Promise.all은 하나라도 실패하면 바로 에러 던짐
  - 참고 : https://dev.to/viclafouch/promise-allsettled-vs-promise-all-in-javascript-4mle

## 45.7 마이크로 태스크 큐

- 마이크로 태스크 큐는 테스크 큐보다 우선순위가 높다
- 마이크로 태스크 큐에 저장 되는 것들 : 후속처리 메서드(then)
- 그 외엔 태스크 큐에 저장
  - later : https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide

## 45.8 fetch

- 400, 500번대 에러는 잡을 수 없다
- CORS 같은 에러는 잡을 수 있다
