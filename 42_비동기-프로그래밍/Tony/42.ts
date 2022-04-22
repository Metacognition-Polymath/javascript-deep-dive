const getData = async () => {
  const res = await axios.get("https://naver.com");
  return res;
};

useEffect(() => {
  console.log("useEffect init");
  getData();
  console.log("useEffect end");
}, []);
