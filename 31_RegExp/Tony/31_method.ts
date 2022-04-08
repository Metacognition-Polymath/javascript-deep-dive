{
  const target = "Is this all there is?";
  const regExp = /is/;

  // const result = regExp.exec(target);
  // 있으면 => [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]
  // 없으면 => null

  // const result = regExp.test(target); // true

  const regExpGlobal = /is/g;
  // const result = target.match(regExp); // [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]
  // regex의 exec와 같음

  // const result = target.match(regExpGlobal); // [ 'is', 'is' ]

  const result = regExpGlobal.exec(target); // g 플래그를 붙여도 하나만 나옴
  // [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]
  console.log(result);
}
