# 43. Ajax

## 43.1 Ajax란?

- Asynchronous Javascript and XML
- XMLHttpRequest : Microsoft가 개발

## 43.2 JSON

- Javascript Object Notation

  - HTTP 통신을 위한 텍스트 데이터 포맷
  - 자바스크립트에 종속되지 않는 언어 독립형 데이터 포맷
  - 작은 따옴표 사용 불가, 큰 따옴표로 묶어야 함

- JSON.stringify

  - JSON 포맷 문자열로 변환
    - 객체 뿐만 아니라 배열도 변환 가능
  - 직렬화(serializing)

- JSON.parse
  - JSON포맷의 문자열을 객체로 변환
  - 역직렬화(deserializing)

## 43.3 XMLHttpRequest

- 브라우저의 Web API(브라우저 환경에서만 실행)
- 객체 전달 시 JSON.stringify 해서 전달해야 함
