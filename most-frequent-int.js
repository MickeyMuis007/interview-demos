/* 
  The following is a google Software Engineer Question:
  Given an array of integers, find the most frequent integer.
  Write a method that takes an array of integers and returns an integer.

  This is my solution
*/

const mostFrequentInt = (arr) => {
  if (!(arr instanceof Array)) return;

  // I guess, I'll create a dictionary to keep try of each integers then increment the value the number of times it exists
  const intCountDict = {};


  console.log("For array:", arr);
  arr.forEach((item) => {
    if (intCountDict.hasOwnProperty(item)) {
      intCountDict[item]++;
    } else {
      intCountDict[item] = 1;
    }
  });

  let maxInt = 0;
  let maxItem = {};
  for (let item in intCountDict) {
    if (intCountDict[item] > maxInt) {
      maxItem = item;
      maxInt = intCountDict[item];
    }
  }

  
  console.log("Dictionary:", intCountDict);
  console.log("Max prop: ", maxItem);
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
