# 46. 제너레이터와 async/await

## 46.1 제너레이터란?

## 46.2 제너레이터 함수의 정의

## 46.3 제너레이터 객체

## 46.4 제너레이터의 일시 중지와 재개

## 46.5 제너레이터의 활용

## 46.6 async/await

- async/await(ES8)을 babel로 컴파일하면 (ES6)제너레이터로 변환된다
- fetch나 Promise만을 사용한 경우 에러처리 시 try-catch를 사용할 수 없어서 에러처리 시점을 정할 수 없지만
- async/await은 에러 처리 시점을 내가 정할 수 있다
- async/await에서 에러가 발생하면 Promise.reject로 리턴된다
