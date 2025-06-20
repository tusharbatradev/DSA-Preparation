var isPalindrome = function (s) {
  let cleanedStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reversedStr = "";

  for (let i = cleanedStr.length - 1; i >= 0; i--) {
    reversedStr = reversedStr + cleanedStr[i];
  }
  
  return cleanedStr === reversedStr

};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
