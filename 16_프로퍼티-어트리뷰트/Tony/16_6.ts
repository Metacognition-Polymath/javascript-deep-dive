{
  const person = {
    _fullName: "Tony",

    get fullName() {
      return this._fullName;
    },
    // set fullName(name) { // 주석 처리하면 set: [Function: set fullName]가 undefined 이 됨
    //   this._fullName = name;
    // },
  };

  console.log(Object.getOwnPropertyDescriptors(person));

  /*
{
  _fullName: {
    value: 'Tony',
    writable: true,
    enumerable: true,
    configurable: true
  },
  fullName: {
    get: [Function: get fullName],
    set: [Function: set fullName], // 주석 처리하면 set: [Function: set fullName]가 undefined 이 됨
    enumerable: true,
    configurable: true
  }
}
*/
}
