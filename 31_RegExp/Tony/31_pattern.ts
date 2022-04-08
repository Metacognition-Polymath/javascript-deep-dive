{
  const target = "Is this all there is?한글도 잘리냐??";
  const regExp = /.../g; // 그냥 공백 포함 3글자씩 자르는 거네 - 한글, 영어 모두 글자수 같은 것으로 취급

  const result = target.match(regExp); // [ 'Is ', 'thi', 's a', 'll ', 'the', 're ', 'is?', '한글도', ' 잘리', '냐??' ]

  // console.log(result);
}

{
  const target = "A AA B BB Aa Bb AAA"; // AAA는 AA와 A로 쪼개져서 둘다 나옴
  const regExp = /A{1,2}/g;
  // 'A'가 최소 1번, 최대 2번 반복 되는 문자열을 전역 검색한다

  const result = target.match(regExp); // [ 'A', 'AA', 'A', 'AA', 'A' ]

  // console.log(result);
}

{
  const target = "A AA B BB Aa Bb";
  const regExp = /A|B/g;
  // 'A'가 최소 1번, 최대 2번 반복 되는 문자열을 전역 검색한다

  const result = target.match(regExp); // [ 'A', 'A', 'A', 'B', 'B', 'B', 'A', 'B' ]

  console.log(result);
}

{
  const target = "A AA B BB Aa Bb";
  const regExp = /A+|B+/g;
  // 'A'가 최소 1번, 최대 2번 반복 되는 문자열을 전역 검색한다

  const result = target.match(regExp); // [ 'A', 'AA', 'B', 'BB', 'A', 'B' ]

  // console.log(result);
}

{
  const target = "A AA B BB Aa Bb"; // AAA는 AA와 A로 쪼개져서 둘다 나옴
  const regExp = /[AB]+/g; // == /A+|B+/g;

  const result = target.match(regExp); // [ 'A', 'AA', 'B', 'BB', 'A', 'B' ]

  // console.log(result);
}

{
  const target = "A AA B TT ZZ Aa Bb";
  const regExp = /[A-Z]+/g;

  const result = target.match(regExp); // [ 'A', 'AA', 'B', 'TT', 'ZZ', 'A', 'B' ]

  // console.log(result);
}

{
  const target = "A AA BB Aa Bb"; // AAA는 AA와 A로 쪼개져서 둘다 나옴
  const regExp = /[A-Za-z]+/g; // == /[A-Z]+/gi;

  const result = target.match(regExp); // [ 'A', 'AA', 'BB', 'Aa', 'Bb' ]

  // console.log(result);
}

{
  const target = "AA BB 12,345";
  const regExp = /[0-9]+/g;

  const result = target.match(regExp); // [ '12', '345' ]

  // console.log(result);
}

{
  const target = "AA BB 12,345";
  const regExp = /[0-9,]+/g; // '0' ~ '9' 또는 ',' 가 한 번 이상 반복되는 문자열을 전역 검색

  const result = target.match(regExp); // [ '12,345' ]

  // console.log(result);
}

{
  const target = "https://www.taehwango.info";
  const regExp = /.info$/;
  const result = regExp.test(target);
  // console.log(result);
}

{
  // const target = '    hello    world';
  const target = "    hello            world";
  // const regex = /\s+/g; // 모든 공백들
  const regex = /^\s+/; // 처음에 있는 모든 공백
  const result = target.match(regex);
  // console.log(result);
}

{
  const targetString = "hello world!! @@ Tony";
  const regex = /[^A-Za-z0-9\s!]/gi;
  const result = targetString.replace(regex, "");
  console.log(result); // hello world!!  Tony
}
