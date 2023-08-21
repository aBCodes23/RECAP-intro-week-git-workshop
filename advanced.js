const wordList = require("./word_list.js");

// DO NOT CHANGE ANY CODE ABOVE THIS LINE

console.log(wordList, "whole list");

// Run this file by typing 'node advanced.js' in your terminal.

//Create a variable called firstThreeWords that contains the first three words in the list.

const firstThreeWords = wordList.slice(0, 3);
console.log(firstThreeWords, "first three words");

//Create a variable called lastThreeWords that contains the last three words in the list.

const lastThreeWords = wordList.slice(-3);
console.log(lastThreeWords, "last three words");

//Create a variable called wordCount that lets us know how many words are in the list.

const wordCount = wordList.length;
console.log(wordCount, "word count");

//Create a variable called twoLetterWords consisting of all the two letter words in the list.

const twoLetterWords = [];
for (let i = 0; i < wordList.length; i++) {
  if (wordList[i].length === 2) {
    twoLetterWords.push(wordList[i]);
  }
}
console.log(twoLetterWords, "two letter words");

//Create a variable called longestWord that contains the longest word in the list.

let longestWord = "";

for (let i = 0; i < wordList.length; i++) {
  if (wordList[i].length > longestWord.length) {
    longestWord = wordList[i];
  }
}

console.log(longestWord, "longest word");

//Create a variable called containsC that contains all the words containing the letter C.

const containsC = [];
for (let i = 0; i < wordList.length; i++) {
  if (wordList[i].includes("c")) {
    containsC.push(wordList[i]);
  }
}

console.log(containsC, "words that contain c");
//Create a variable called reversedWords that contains the list of words in reverse order.

reversedWords = [];

for (let i = wordList.length - 1; i >= 0; i--) {
  reversedWords.push(wordList[i]);
}

console.log(reversedWords, "reversed words");

//Create a variable called noVowels that contains a list of all the words containing no vowels.

const noVowels = [];
wordList.forEach((word) => {
  if (/^[^aeiouAEIOU]*$/.test(word)) {
    noVowels.push(word);
  }
});
console.log(noVowels, "no vowels");

//Create a variable called repeatedLetters that contains all of the words containing repeated letters.

const repeatedLetters = [];
wordList.forEach((word) => {
  if (/([a-zA-Z])\1/i.test(word)) {
    repeatedLetters.push(word);
  }
});
console.log(repeatedLetters, "repeat letters");
