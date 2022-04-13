{
  const arr = [1, 2, 3];
  const max = Math.max(...arr);
  console.log(max); // 3
}

{
  const arr1 = [1, 4];
  const arr2 = [2, 3];
  arr1.splice(1, 0, ...arr2);
  console.log(arr1); // [1, 2, 3, 4]
}

{
  // 배열 복사 ES5
  const origin = [1, 2];
  const copy = origin.slice();
  console.log(copy); // [1, 2]
}

{
  // 배열 복사 ES6
  const origin = [1, 2];
  const copy = [...origin];
  console.log(copy); // [1, 2]
}
