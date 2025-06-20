function maximumOccuringCharacters(str) {
  let counter = {};
  let maxChar = "";
  let maxCount = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    counter[char] = (counter[char] || 0) + 1;

    if (
      counter[char] > maxCount ||
      (counter[char] === maxCount && char < maxChar)
    ) {
      maxCount = counter[char];
      maxChar = char;
    }
  }

  return maxChar;
}
console.log(maximumOccuringCharacters("testsample"));
