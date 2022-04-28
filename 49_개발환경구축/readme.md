# 49. Babel과 Webpack을 이용한 ES6+/ES.NEXT 개발 환경 구축

## 49.1 Babel

- 최신 javascript를 오래된 javascript로 변환하는 컴파일러

\*\* compiler

- 다른언어로 변환해주는 것
- typescript 컴파일러는 따로 존재한다

- @babel/preset-\* (\* : env, flow, react, typescript)
  - 그 환경을 세팅

## 49.2 Webpack

- babel-loader를 설치해서 웹팩과 같이 사용하면 ES5 사양의 소스코드로 트랜스파일링 할 수 있다
