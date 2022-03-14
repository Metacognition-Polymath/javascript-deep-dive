{
  const person = {};

  Object.defineProperties(person, {
    firstName: {
      value: "Taehwan",
      writable: true,
      enumerable: true,
      configurable: false,
    },
  });

  console.log(Object.getOwnPropertyDescriptors(person));
}
