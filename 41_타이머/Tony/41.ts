{
  let count = 1;
  const timeoutId = setInterval(() => {
    console.log(count);
    if (count++ === 5) {
      clearInterval(timeoutId);
    }
  }, 1000);
}
