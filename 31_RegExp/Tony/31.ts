{
  const count = (str: string, char: string) => {
    console.log(str.match(new RegExp(char, "gi")));
    return (str.match(new RegExp(char, "gi")) ?? []).length;
  };

  count("Is this all there is", "is"); // 3 <- ['Is', 'is', 'is']
  count("Is this all there is", "xx"); // null
}
