// "use strict"; // strict mode와 module scope는 관계가 없다

import { func1 } from "./module.mjs";

const x = "foo";

console.log(x); // window 객체는 공유되지만 type="module"에선 전역으로 window에 변수가 등록되지 않는다

function foo() {
  console.log("foo");
}

func1();
