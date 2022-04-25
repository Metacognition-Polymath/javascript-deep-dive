# 44. REST API

- REpresentational State Transfer
- HTTP 프로토콜을 의도에 맞게 디자인하도록 유도
- REST의 기본원칙을 성실히 지킨 서비스 디자인을 RESTful 이라고 표현한다

## 44.1 REST API의 구성

- REST API 3가지 요소
  - resource(자원) : URL(엔드포인트)
  - verb(행위) : HTTP 요청 메서드
  - representations(표현) : 페이로드, 자원에 대한 행위의 구체적 내용
- REST API만으로 HTTP 요청의 내용을 이해할 수 있다

## 44.2 REST API 설계 원칙

- URI는 리소스를 표현하는 데 중점을 두어야 한다

```http
# bad
GET /getTodos/1
GET /todos/show/1

# good
GET /todos/1
```

## 44.3 JSON Server를 이용한 REST API 실습
