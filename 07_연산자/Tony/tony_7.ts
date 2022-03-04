// console.log(1 + true); // error
// console.log(1 + false); // error

type DeleteTest = {
  a: string;
  b?: string;
};

const deleteTest: DeleteTest = {
  a: "aa",
  b: "bb",
};

// console.log(delete deleteTest.b);
delete deleteTest.b;
console.log(deleteTest); // { a: 'aa' }
