// NOTE: last 3 tasks need to be finished, logic is not done yet

/*Write a function named countPalindrome() which takes a string and returns 
the number of  palindrome words.
Note: A palindrome word is a word that reads the same forwards and 
backwards. Example: level, radar, deed, refer.
*/
console.log(`---------countPalindrome ------------`);
const countPalindrome = (str) => {
  const convertToArr = str.split(" ");
  return convertToArr.reduce((counter, el) => {
    if (el === "") return counter;
    if (el.toLowerCase().split("").reverse().join("") === el.toLowerCase())
      counter++;
    return counter;
  }, 0);
};
console.log(countPalindrome("Mom and Dad")); //  -> 2
console.log(countPalindrome("See you at noon")); //  -> 1
console.log(countPalindrome("Kayak races attracts racecar drivers")); //  -> 2
console.log(countPalindrome("")); //  -> 0
console.log(countPalindrome("No palindrome here")); //  -> 0

//
console.log(`---------sum ------------`);

/*Write a function named sum() which takes an array of numbers and a boolean 
value as arguments. It will return the sum of the numbers positioned at even 
indexes if true. And, return sum of numbers positioned at odd indexes if false.*/

const sum = (arr, bool) => {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if ((i % 2 === 0) === bool) {
      counter += arr[i];
    }
  }
  return counter;
};
console.log(sum([1, 5, 10], true)); //  -> 11
console.log(sum([3, 7, 2, 5, 10], false)); //  -> 12
console.log(sum([-1, 1, -2, 2], true)); // -> -3
console.log(sum([0, -1, 15, 1], false)); // -> 0
console.log(sum([1, 2, 3, 4, -4], true)); // -> 0

/*
Write a function named nthChars() which takes a string and a number as 
arguments and returns the string back with every nth characters. 
*/
console.log(`-------------nthChars-------------`);
const nthChars = (str, num) => {
  let output = "";
  if (str.length < num) {
    return "";
  }

  for (let i = 0; i < str.length; i++) {
    if ((i + 1) % num === 0) output += str[i];
  }
  return output;
};
console.log(nthChars("Java", 2)); //   -> "aa"
console.log(nthChars("JavaScript", 5)); //    -> "St"
console.log(nthChars("Java", 3)); //    -> "v"
console.log(nthChars("Hi", 4)); //    -> ""
console.log(nthChars("0123456789", 2)); //   -> "13579"

console.log(`---NOTE last one is no working properly---canFormString--------`);
/*
Write a function named canFormString() which takes two string arguments 
and returns true if the second string can be formed by rearranging the 
characters of first string. Return false otherwise.
NOTE: This method is case-insensitive and ignore the white spaces.
*/
const canFormString = (word, synonim) => {
  let result = true;
  for (let i = 0; i < synonim.length; i++) {
    if (synonim.toLowerCase().includes(word[i])) {
      result = true;
      continue;
    } else {
      result = false;
    }
  }
  return result;
};
console.log(canFormString("Hello", "Hi")); //   -> false
console.log(canFormString("programming", "gaming")); //   -> true
console.log(canFormString("halogen", "hello")); //   -> false
console.log(canFormString("CONVERSATION", "voices rant on")); //   -> true
console.log(canFormString("12", "123")); //  -> false

console.log(`-----isAnagram--------`);
/*Write a function named isAnagram() which takes two string arguments and 
returns true if the given strings are anagram. Return false otherwise.
NOTE: An anagram is a word or phrase formed by rearranging the letters of 
another word or phrase. In the context of strings, checking if two strings are 
anagrams of each other means verifying if they contain the same characters in 
the same quantities, regardless of the order of those characters.
NOTE: This method is case-insensitive and ignore the white spaces.
*/
const isAnagram = (str, modifiedStr) => {
  let result = true;
  for (let i = 0; i < modifiedStr.length; i++) {
    if (str.toLowerCase().includes(modifiedStr[i])) {
      result = true;
      continue;
    } else {
      result = false;
    }
  }
  return result;
};
console.log(isAnagram("Apple", "Peach")); //   -> false
console.log(isAnagram("listen", "silent")); //   -> true
console.log(isAnagram("astronomer", "moon starer")); //   -> true
console.log(isAnagram("CINEMA", "iceman")); //  -> true
console.log(isAnagram("123", "1234")); //  -> false

console.log(`-----count--------`);
/*
Write a function named count() which takes an array of numbers and a 
boolean value as arguments. It will return the total count of the even numbers if 
the boolean value is true. And return the total count of the odd numbers if the 
boolean value is false. 
*/
const count = (arr, bool) => {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] % 2 === 0) === bool) {
      counter++;
    }
  }
  return counter;
};
console.log(count([1, 5, 10], true)); // -> 1
console.log(count([3, 7, 2, 5, 10], false)); // -> 3
console.log(count([-1, 1, -2, 2], true)); //-> 2
console.log(count([0, -1, 15, 1], false)); //  -> 3
console.log(count([1, 2, 3, 4, -4], true)); //  -> 3

console.log(`-----sumDigitsDouble--------`);
/**
 Write a function named sumDigitsDouble() which takes a string and returns 
the sum of the digits in the given String multiplied by 2. Return -1 if the given 
string does not have any digits. Ignore negative numbers.
*/
const sumDigitsDouble = (str) => {
  if (str.includes("0123456789")) return -1;
  const convertToArr = str.split("");

  return convertToArr.reduce((counter, el) => {
    if (!isNaN(el)) {
      counter += el * 2;
    }
    return counter;
  }, 0);
};
console.log(sumDigitsDouble("Javascript")); // -> -1
console.log(sumDigitsDouble("23abc45")); //   -> 28
console.log(sumDigitsDouble("Hi-23")); //  -> 10
console.log(sumDigitsDouble("ab12")); //  -> 6
console.log(sumDigitsDouble("n0numh3r3")); //  -> 12

console.log(`-----countOccurrence--------`);
/**
 Write a function named countOccurrence() which takes two string arguments 
and returns how many times that the first string can form the second string.
*/
const countOccurrence = (str1, str2) => {
  const convert1 = str1.toLowerCase().split(" ");
  const convert2 = str2.toLowerCase().split("").sort().join("");
  let counter = 0;
  for (let i = 0; i < convert1.length; i++) {
    let word = convert1[i].split("").sort().join("");
    console.log(word, "and", convert2);
    if (word.includes(convert2)) {
      counter++;
    }
  }
  return counter;
};
console.log(countOccurrence("Javascript", "Java")); //  -> 1
console.log(countOccurrence("Hello", "World")); //  -> 0
console.log(countOccurrence("Can I can a can", "anc")); //   -> 3
console.log(countOccurrence("Hello", "l")); //  -> 2
console.log(countOccurrence("IT conversations", "IT")); //   -> 2
