const person = {
  something: "Tony",
  getName() {
    console.log(this.something);
  },
};

// person.getName(); // 'Tony'
// const { getName } = person;
// getName(); // undefined
