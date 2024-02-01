/*
Write a function named countVC() which takes a string argument and returns 
an object with the count of vowels and consonants.
Examples:
*/

console.log("-------------countVC--------------")
function countVC(str) {
  let obj = {
    vowels: 0,
    consonants: 0
  };
  const vow = 'aeuio'
  for (let i = 0; i < str.length; i++) {
    if (!vow.includes(str[i].toLowerCase())) {
      obj.consonants++
    } else {
      obj.vowels++
    }
  }
  return obj
}
console.log(countVC("Hello"))           //   -> {vowels: 2, consonants: 3}
console.log(countVC("Programming"))  // -> {vowels: 3, consonants: 8}
console.log(countVC("123AbC"))      //      -> {vowels: 1, consonants: 2}
console.log(countVC("123!@#xyz"))       //     -> {vowels: 0, consonants: 3}
console.log(countVC(""))              //        -> {vowels: 0, consonants: 0}


console.log("-------------countChars--------------")
/*
Write a function named countChars() which takes a string argument and 
returns an object with the count of letters, numbers, and specials.
NOTE: If the count of a category is 0 then it should not be in the object. Also 
spaces do not count towards any category
*/
const countChars = str => {
  if (str.trim().length === 0) return {}
  let obj = {
    letters: 0,
    numbers: 0,
    specials: 0
  };
  const specChar = '!@#$%'
  for (let i = 0; i < str.trim().length; i++) {
    if (specChar.includes(str[i])) {
      obj.specials++
    }
    else if (Number(str[i])) {
      obj.numbers++
    }
    else if (str[i] !== " " && typeof str[i].toLowerCase() === "string") {
      obj.letters++
    }
  }
  for (const key in obj) {
    if (obj[key] === 0) {
      delete obj[key]
    }
  }
  return obj
}
console.log(countChars("Hello"))  //                           -> {letters: 5}
console.log(countChars("Programming 123"))  //   -> {letters: 11, numbers: 3}
console.log(countChars("123AbC!@#")) //              -> {letters: 3, numbers: 3, specials: 3}
console.log(countChars("0987654321")) //               -> {numbers: 10}
console.log(countChars("     ")) //                                 -> {}
console.log(countChars(""))  //                                      -> {}


console.log("-------------maxOccurrences--------------")
/*
Write a function named maxOccurrences() which takes a string argument and 
returns the character that appears the most number of times in the string.
NOTE: If there is a tie, return the first one that appears in the string. This task is 
case sensitive. Ignore spaces. If the string is empty or consist of spaces only, 
then return an empty string.
*/
const maxOccurrences = str => {
  if (str.trim().length === 0) return ""
  if (str.trim().length === 2) return str
  let objLetters = {}
  for (let i = 0; i < str.toLowerCase().length; i++) {
    if (str[i] !== " ") {

      if (objLetters[str[i]] === undefined) {
        objLetters[str[i]] = 1
      } else {
        objLetters[str[i]]++
      }
    }
  }

  const val = Object.values(objLetters).sort((a, b) => b - a)[0]

  for (const key in objLetters) {
    if (objLetters[key] === val) return key
  }
}
console.log(maxOccurrences("Hello"))  //             -> "l"
console.log(maxOccurrences("Occurrences"))  //  -> "c"
console.log(maxOccurrences("    ab    ")) //      -> "al"
console.log(maxOccurrences("12   3   21"))  //    -> "1"
console.log(maxOccurrences("      ")) //      -> ""
console.log(maxOccurrences("")) //    -> ""

console.log("-------------starOut--------------")

/*Write a function named starOut() which takes a string argument and returns it 
back with every star removed as well as the right and left of the star.
NOTE: If there are 2 stars next to each other than remove the next non star
So "ab*cd" yields "ad" and "ab**cd" also yields "ad".
*/
const starOut = str => {
  const trimmed = str.trim().split("*").join("")
  if (trimmed.length === 0) return ""
  if (trimmed.length < 4) return trimmed
  return `${trimmed[0]}${trimmed[trimmed.length - 1]}`

}
console.log(starOut("ab*cd")) //  -> "ad"
console.log(starOut("ab**cd"))  //  -> "ad"
console.log(starOut("xm*sm*sy"))  //  -> "xy"
console.log(starOut("abc")) //     -> "abc"
console.log(starOut("***")) //    -> ""
console.log(starOut("   ")) //      -> "   "
console.log(starOut(""))  //    -> ""

console.log("-------------romanToInt--------------")
/*
Write a function named romanToInt() which takes a string roman numeral as 
its arguments and return the roman numeral converted to the number. A roman 
numeral is a set of symbols that add up to a number. CXII -> 100+10+1+1 -> 
112
NOTE: 
Symbol       Value
I                  1
V                 5
X                10
L                 50
C                100
D                500
M               1000
*/

function romanToInt(roman) {
  const romanNum = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    const currentVal = romanNum[roman[i]];
    const nextSymbolValue = romanNum[roman[i + 1]];

    if (nextSymbolValue > currentVal) {
      result += nextSymbolValue - currentVal;
      i++;
    } else {
      result += currentVal;
    }
  }

  return result;
}

console.log(romanToInt("I"))  //  -> 1
console.log(romanToInt("IV")) //  -> 4
console.log(romanToInt("CXII")) //  -> 112
console.log(romanToInt("MMM"))  //  -> 3000
console.log(romanToInt("MMMDCCCLXXXVIII"))  //   -> 3888
console.log(romanToInt("MDCLXVI"))  //    -> 1666
