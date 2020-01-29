const getStats = require("./method-stat");

const reverse1 = (str) => {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  return reverseStr;
}

const reverse2 = (str) => {
  function rev (s, len, o) {
    return (len === 0) ? o : rev(s, --len, (o += s[len]));
  }
  return rev(str, str.length, '');
}

const methodStats = (val) => {
  getStats(val, reverse1);
  getStats(val, reverse2);
}

const val1 = "alkjdoi";
const val2 = "alkjdiojf owjlkdfa;s dfoasidflaksdfoasdf alsdkik lkjdlja;";

setInterval(() => methodStats(val2), 2000);
