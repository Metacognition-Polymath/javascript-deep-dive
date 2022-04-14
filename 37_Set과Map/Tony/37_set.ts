{
  // const sampleArr = [
  //   {
  //     a: "aa",
  //     b: "bb",
  //   },
  //   {
  //     a: "aa",
  //     b: "bb",
  //   },
  // ]; // {} !== {} 이므로 중복 제거가 되지 않는다
  // 특정 값을 제거할 땐 Array.prototype.filter
  // 아니면 object로 만들때 이미 제거 될 것 같다(reduce 사용)
  const sampleArr = ["a", "b", "a"]; // 중복이 제거 된다
  const aSet = new Set(sampleArr);
  console.log(aSet);
  console.log(aSet instanceof Set); // true
  console.log(aSet instanceof Object); // true
  console.log(aSet instanceof Array); // false
}
