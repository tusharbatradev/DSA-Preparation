function reverseWords(inp) {
  let joinedStr = [];

  for (let i = inp.length - 1; i >= 0; i--) {
    if (inp[i] === " ") {
      let j = i + 1;
      while (j < inp.length && inp[j] !== " ") {
        joinedStr.push(inp[j]);
        j++;
      }
      joinedStr.push(" ");
    }
  }

  let k = 0;
  while (k < inp.length && inp[k] !== " ") {
    joinedStr.push(inp[k]);
    k++;
  }
  console.log(joinedStr);
}

reverseWords([
  "t",
  "h",
  "e",
  " ",
  "s",
  "k",
  "y",
  " ",
  "i",
  "s",
  " ",
  "b",
  "l",
  "u",
  "e",
]);
