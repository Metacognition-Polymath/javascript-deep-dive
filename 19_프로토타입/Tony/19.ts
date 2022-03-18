{
  const person = {
    getName(first: string, last?: string) {
      return `${first} ${last ? last : ""}`;
    },
    // getName(fullName: string) {
    //   // Duplicate identifier 'getName'.
    //   return fullName;
    // },
  };

  console.log(person.getName("tony"));
}
