## 7장에서 인상깊었던 내용 정리

### **1\. 단항연산자(+), (-)에 의한 타입변환**

```javascript
// string -> number
let x = '1'
console.log(+x); // 1

// string -> NaN
console.log(+'hello') // NaN

// boolean -> number
console.log(+true) // 1
console.log(+false) // 0
```

### **2\. 암묵적 타입 변환, 타입 강제 변환** 

 > 의도하지 않은 타입으로 변환되는 상황에 주의 해야겠다.

```javascript
// null은 0으로 타입 변환된다.
1 + null; // 1

// undefined는 숫자로 타입 변환되지 않는다.
+undefined; // NaN
1 + undefined // NaN
```

### **3\. NaN의 일치비교연산**

 > **NaN**은 자신과 일치하지 않는 **유일한** 값이다.

 > 숫자가 **NaN**인지 확인하기 위해서는 **isNaN**을 사용해서 확인하자. 

```javascript
isNaN(NaN);  // -> true
isNaN(10);  // -> false
isNaN(1 + undefined); // -> true
```

### **4\. Object.is 메서드**

 > 예측 가능한 정확한 비교 결과를 반환한다 - 예시코드를 통해 확인해보자.

```javascript
-0 === +0; // true
Object.is(-0,0); // false

NaN === NaN; // false
Object.is(NaN, NaN); // true
```

### **5\. typeof 연산자의 버그 및 주의사항.**

 > **typeof null** 의 결과로 **"object"** 가 반환된다. - 아직 해결되지 않은 자바스크립트 자체버그이다.

 > 선언하지 않은 식별자를 **typeof**로 연산할 경우,  **에러**를 반환하지 않고 **undefined**를 반환한다. 

```javascript
typeof null // -> "object"

// undeclared 식별자를 선언한 적이 없다.
// 선언되지 않은 값을 연산했는데, 에러를 반환하지 않음에 주의하자.
typeof undeclared;  // -> undefined
```

### **6\. delete 연산자**

\> 객체의 프로퍼티를 삭제한다.  - 다른 코드에 영향을 줄 수 있다.

\> 불변성유지가 필요할 경우, 사용하면 안된다.

```javascript
let ob = { a : 1 };

delete ob.a;
console.log(ob); // {}
```

### **7\. ?.(옵셔널 체이닝 연산자)**

\> ?.을 사용하면 프로퍼티가 없는 중첩 객체를 에러 없이 안전하게 접근할 수 있습니다.

\> 코드예시와 주석을 통해 사용법을 확인해보자.

```javascript
obj?.prop // obj가 존재하면 obj.prop을 반환, 그렇지 않으면 undefined반환

obj?.[prop] // obj가 존재하면 obj.[prop]을 반환, 그렇지 않으면 undefined반환

obj?.method() // obj가 존재하면 obj.method()를 호출, 그렇지 않으면 undefined반환
