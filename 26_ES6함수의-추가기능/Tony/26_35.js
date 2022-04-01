const foo = () => console.log(this); // {}
foo();
// 브라우저에선 this가 window가 되고
// node.js에선 {} 가 된다
