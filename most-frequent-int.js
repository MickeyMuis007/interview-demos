/* 
  The following is a google Software Engineer Question:

  Part 1:
  Given an array of integers, find the most frequent integer.
  Write a method that takes an array of integers and returns an integer.

  {1, 2, 3, 3} => 3
  {1, 2, 3} => 1 or 2 or 3
  {3, 1, 4, 57, 4} => 4

  This is my solution
*/

const mostFrequentInt = (arr) => {
  if (!(arr instanceof Array)) return;
  
  console.log("For array:", arr);
  const intCountDict = getIntCountDict(arr);

  const maxItem = getMaxItem(intCountDict);
  
  console.log("Dictionary:", intCountDict);
  console.log("Max prop: ", maxItem);
  return maxItem;
}

const getIntCountDict = (arr) => {
  const intCountDict = {};

  arr.forEach((item) => {
    if (intCountDict.hasOwnProperty(item)) {
      intCountDict[item]++;
    } else {
      intCountDict[item] = 1;
    }
  });

  return intCountDict;
} 

const getMaxItem = (dict) => {
  let maxInt = Number.MIN_SAFE_INTEGER;
  let maxItem = {};
  for (let item in dict) {
    if (dict[item] > maxInt) {
      maxItem = item;
      maxInt = dict[item];
    }
  }
  return maxItem;
}

const arr1 = [1, 2, 3, 3];        // => 3
const arr2 = [1, 2, 3];           // => 1 or 2 or 3
const arr3 = [3, 1, 4, 57, 4];    // => 4
const arr4 = {};    // => 4

console.log(mostFrequentInt(arr4));
console.log(mostFrequentInt(arr1));
console.log(mostFrequentInt(arr2));
console.log(mostFrequentInt(arr3));
