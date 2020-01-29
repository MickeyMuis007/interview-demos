const getStats = require("./method-stat");

const palindrone1 = (str) => {
  const len = str.length;
  const mid = Math.floor(len/2);

  for (let i = 0; i < mid; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }

  return true;
}

const palindrone2 = (str) => {
  return str === str.split("").reverse().join("") ? true : false;
}

const methodStats = (val) => {
  getStats(val, palindrone1);
  getStats(val, palindrone2);
}

const val1 = "dshihsd";
const val2 = "datijasdl";

// methodStats(val1);
// methodStats(val2);
setInterval(() => methodStats(val2), 1000);

