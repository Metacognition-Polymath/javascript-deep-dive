# 모던 자바스크립트 Deep Dive

- 저자 : 이웅모
- 자바스크립트의 기본 개념과 동작 원리

## 스터디

- 평일

  - 시간 : 22:00 ~ 23:30
  - 주말 및 공유일 제외

- 진행

  - 22:00 ~ 23:00 => 모여서 공부
  - 23:00 ~ 23:30 => 토론

- 장소

  - [게더타운](https://app.gather.town/app/zvVfLbjGc6DVVluv/DeepDiveStudy)

- 소통 채널
  - [디스코드](https://discord.gg/hnTWXmsg)

<details>
<summary>들어가며</summary>

### 자바스크립트의 태생적 특징

- 대부분 프로그래밍 언어는 애플리케이션을 개발하기 위한 범용적인 용도로 설계
- 하지만 자바스크립트는 웹페이지의 단순한 보조 기능을 처리하기 위한 제한적인 용도를 목적으로 탄생
- 그러나 자바스크립트도 범용 어플리케이션 개발 언어로 성장
- 자바스크립트를 학습하는 방식도 이에 맞게 변화해야한다는 목적으로 기획되었음
  - 자바스크립트의 기본 개념과 동작 원리를 깊이 있게 학습

### 기본 개념과 동작 원리 이해의 중요성

- 프로그래머의 역할 : 코드로 문제해결
- 구현된 코드는 의도한 대로 정확히 동작해서 문제를 해결해야 함
- 자신이 구현한 코드가 컴퓨터 내부에서 어떻게 동작할 것인지 예측 가능해야 하며, 이를 명확히 설명할 수 있어야 함

  - 기본 개념과 동작원리를 정확히 이해해야 함

- 문맥에 맞는 정확한 용어 사용 -> 명확한 의사 소통

### 학습 방법

- 기본 개념과 동작원리를 이해하는 것은 목표가 아니라 과정
- 코드 구현 능력을 갖추기 위한 과정 또한 필요

1. 기본 개념과 동작 원리 이해

- 한번에 학습하기 보단 키워드 중심으로 나누어 학습
- 완벽하게 이해하기보단 여러번 반복해서 학습
- 아직 학습하지 않은 개념은 일단 기술부채로 쌓아두고 진행

2. 코드 구현능력을 갖추기 위한 연습

- 코딩 연습 : 머리속에 있는 문제 해결 방안을 문법을 통해 구체화하는 과정
- 자신의 능력을 살짝 넘어서는 도전을 지속적으로 시도

3. 프로젝트

- 프로젝트를 통해 더욱 깊이 이해하고 협업을 경험할 수 있음
- 학습이 필요한 사항을 파악할 수 있음

- 1~3 사이클을 순환적으로 반복
- 지속적 개선(continuous improvement)을 통한 성장
- 빨리가는 유일한 방법은 제대로 가는 것이다. - 로버트 마틴(클린코드 저자) -

</details>

# 목차

- [x] 1. 프로그래밍 - 2022.02.28
- [x] 2. 자바스크립트란? - 2022.02.28
- [x] 3. 자바스크립트 개발 환경과 실행 방법 - 2022.02.28
- [x] 4. 변수 - 2022.03.02
- [x] 5. 표현식과 문 - 2022.03.02
- [x] 6. 데이터 타입 - 2022.03.03
- [x] 7. 연산자 - 2022.03.04
- [x] 8. 제어문 - 2022.03.04
- [x] 9. 타입 변환과 단축 평가 - 2022.03.07
- [x] 10. 객체 리터럴 - 2022.03.07
- [x] 11. 원시 값과 객체의 비교 - 2022.03.08
- [x] 12. 함수 - { 2022.03.09 : 12 ~ 12.4, 2022.03.10 : 12장 나머지 }
- [x] 13. 스코프 - 2022.03.10
- [x] 14. 전역 변수의 문제점 - 2022.03.11
- [x] 15. let, const 키워드와 블록 레벨 스코프 - 2022.03.11
- [x] 16. 프로퍼티 어트리뷰트 - 2022.03.14
- [x] 17. 생성자 함수에 의한 객체 생성 - 2022.03.15
- [x] 18. 함수와 일급 객체 - 2022.03.16
- [x] 19. 프로토타입 - { 2022.03.17 : 19.1 ~ 19.7, 2022.03.18 : 19.8 ~ 19.14 }
- [x] 20. strict mode - 2022.03.22
- [x] 21. 빌트인 객체 - 2022.03.23
- [x] 22. this
- [x] 23. 실행 컨텍스트 - { 2022.03.24 : 23.1 ~ 23.4, 23.5 ~ 23.7 }
- [x] 24. 클로저 - 2022.03.28
- [x] 25. 클래스 - { 2022.03.29 : 25.1 ~ 25.7, 2022.03.30 : 25.8 }
- [x] 26. ES6 함수의 추가 기능 - 2022.04.01
- [x] 27. 배열 - 2022.04.04
- [x] 28. Number - 2022.04.05
- [x] 29. Math - 2022.04.05
- [x] 30. Date - 2022.04.06
- [x] 31. RegExp - 2022.04.07
- [x] 32. String - 2022.04.08
- [x] 33. 7번째 데이터 타입 Symbol - 2022.04.11
- [x] 34. 이터러블 - 2022.04.12
- [x] 35. 스프레드 문법 - 2022.04.13
- [x] 36. 디스트럭처링 할당 - 2022.04.13
- [x] 37. Set과 Map - 2022.04.14
- [x] 38. 브라우저의 렌더링 과정 - 2022.04.15
- [x] 39. DOM - 2022.04.18 : 39.1 ~ 39.2.4, 2022.04.19 : ~ 39.5, 2022.04.21
- [x] 40. 이벤트 - 2022.04.21
- [x] 41. 타이머 - 2022.04.22
- [x] 42. 비동기 프로그래밍 - 2022.04.22
- [x] 43. Ajax - 2022.04.25
- [x] 44. REST API - 2022.04.25
- [x] 45. 프로미스 - 2022.04.26
- [x] 46. 제너레이터와 async/await - 2022.04.26
- [x] 47. 에러 처리 - 2022.04.26
- [ ] 48. 모듈
- [ ] 49. Babel과 Webpack을 이용한 ES6+/ES.NEXT 개발 환경 구축

# commit 및 push 방법

- 각 장의 폴더에 본인의 이름(닉네임)으로 폴더를 만들고 그 안에 공부내용을 정리한 뒤 올린다.
- e.g., 01\_프로그래밍 > Tony > 01_summary.md
- 본인 이름으로 된 폴더를 만들어서 정리해서 충돌이 날일이 없기 때문에 main에 직접 push한다.

## 터미널 명령어

- git pull
- git add .
- git commit -m "`이름` : `내용`"
- git push origin main
