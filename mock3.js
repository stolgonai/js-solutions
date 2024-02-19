
console.log(`-----------replaceFirstLast--------`)
function replaceFirstLast(str) {
    if (str.trim().length < 2) return "";
    let first = str[0];
    let last = str[str.length - 1];
    let mid = str.slice(1, str.length - 1);
    return `${last}${mid}${first}`;
}
// console.log(replaceFirstLast("")); // ""
// console.log(replaceFirstLast("Hello")); // "oellH"
// console.log(replaceFirstLast("Tech Global")); // "lech GlobaT"
// console.log(replaceFirstLast("A")); // ""
// console.log(replaceFirstLast(" A ")); // ""


console.log(`-----------swapFirstLastWord--------`)
function swapFirstLastWord(str) {
    if (str.length === 0 || str.length === undefined) return "";
    if (!str.includes(" ") || str[str.length - 1] === " ") return "";
    let first = str.slice(0, str.indexOf(" "));
    let last = str.slice(str.lastIndexOf(" "));
    let rest = str.slice(str.indexOf(" ") + 1, str.lastIndexOf(" "));
    return `${last} ${rest} ${first}`;
}

console.log(swapFirstLastWord("Hello World"));
console.log(swapFirstLastWord("I like JavaScript"));
console.log(swapFirstLastWord("foo bar foo bar"));
console.log(swapFirstLastWord(""));
console.log(swapFirstLastWord(" "));
console.log(swapFirstLastWord("Hello"));
console.log(swapFirstLastWord("Hello "));


console.log("-------factorial-------------------");
function factorial(num) {
    let factorial = 1;
    if (num === 0) return 0;
    else {
        for (let i = num; i > 0; i--) {
            factorial *= i;
        }
        return factorial;
    }
}
console.log(factorial(5)); // -> 120
console.log(factorial(4)); // -> 24
console.log(factorial(0)); // -> 0
console.log(factorial(1)); // -> 1

console.log("-------removeExtraSpaces--------------------------");
function removeExtraSpaces(str) {
    return str
        .trim()
        .split(" ")
        .reduce((result, el) => {
            if (el !== "") result.push(el);
            return result;
        }, [])
        .join(" ");
}
console.log(removeExtraSpaces("Hello")); //  -> "Hello"
console.log(removeExtraSpaces("      Hello    World     ")); //  -> "Hello World"
console.log(removeExtraSpaces("     JavaScript is          fun")); //  -> "JavaScript is fun”
console.log(removeExtraSpaces("")); //  -> ""

console.log("-------firstDuplicate-------------------");
function firstDuplicate(arr) {
    let seen = {};

    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]] !== undefined) {
            return arr[i];
        } else {
            seen[arr[i]] = true;
        }
    }

    return -1;
}
console.log(firstDuplicate([3, 7, 10, 0, 3, 10]));      // Output: 3
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]));      // Output: 5
console.log(firstDuplicate([5, '5', 3, 7, 4]));      // Output: -1
console.log(firstDuplicate([123, 'abc', '123', 3, 'abc']));    // Output: 'abc'
console.log(firstDuplicate([1, 2, 3]));        // Output: -1
console.log(firstDuplicate(['foo', 'abc', '123', 'bar']));     // Output: -1

console.log("-------getDuplicates-------------------");
function getDuplicates(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                if (!result.includes(arr[j])) result.push(arr[j]);
            }
        }
    }
    return result;
}
console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0])); //-[ 0, -7 ]
console.log(getDuplicates([1, 2, 5, 0, 7]));
console.log(getDuplicates(["A", "foo", "12", 12, "bar", "a", "a", "foo"]));
console.log(getDuplicates(["foo", "12", 12, "bar", "a"]));

/**
* Task 17
* Write a function named as reverseStringWords() which takes a string 
as an argument and returns string back with each word separately 
reversed when invoked.
NOTE: Make your code dynamic that works for any string. Make sure you 
consider extra spaces before and after words in the given string.
*/

console.log("-------reverseStringWords-------------------");
function reverseStringWords(str) {
    let arr1 = str.split(" ");
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        let reversed = arr1[i].split("").reverse().join("");
        result.push(reversed);
    }
    return result.join(" ");
}
console.log(reverseStringWords("Hello World"));


console.log("-------add-------------------");
const add = (arr1, arr2) => {
    if (arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1];
    return arr1.map((value, i) => value + (arr2[i] || 0));
};

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2])); ///  -> [9, 3, 2, 7, 5, 10]
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])); /// -> [16, 11, 9,  3, 2, 7, 5, 10, 34]
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11])); // -> [0, 0, 0, 0])

/**
* Write a function named fizzBuzz1() which takes a number argument and 
returns "Fizz" if the given number is divisible by 3, "Buzz" if the number is 
divisible by 5, and "FizzBuzz" if the number is divisible by both 3 and 5. 
Otherwise, it will return the number itself. 
*/
console.log("-----fizzBuzz1-----------------");
const fizzBuzz1 = (num) =>
    num % 3 === 0 && num % 5 === 0
        ? "FizzBuzz"
        : num % 3 === 0
            ? "Fizz"
            : num % 5 === 0
                ? "Buzz"
                : num;
console.log(fizzBuzz1(0)); // -> "FizzBuzz"
console.log(fizzBuzz1(1)); // -> 1
console.log(fizzBuzz1(3)); // -> "Fizz"
console.log(fizzBuzz1(5)); // -> "Buzz"
console.log(fizzBuzz1(30)); //  -> "FizzBuzz"
console.log(fizzBuzz1(10)); //  -> "Buzz"
console.log(fizzBuzz1(15)); // -> "FizzBuzz"
console.log(fizzBuzz1(-15)); //  -> "FizzBuzz"

/**
 * TASK 7
 * Write a function named as isPalindrome() which takes a 
string word as an argument and returns true if the word is 
palindrome or returns false otherwise when invoked.
NOTE: Palindrome: It is a word that is read the same backward 
as forward
Examples: kayak, civic, madam
NOTE: your function should ignore case sensitivity
 */
console.log("------isPalindrome----------------------");
function isPalindrome(str) {
    return (
        str.length <= 1 ||
        str.toLowerCase() === str.toLowerCase().split("").reverse().join("")
    );
}
console.log(isPalindrome("Hello")); //  -> false
console.log(isPalindrome("Kayak")); //  -> true
console.log(isPalindrome("civic")); //  -> true
console.log(isPalindrome("abba")); // -> true
console.log(isPalindrome("ab  a")); // -> false
console.log(isPalindrome("123454321")); //  -> true
console.log(isPalindrome("A")); //  -> true
console.log(isPalindrome("")); // -> true)


/**
 * Write a function named removeDuplicates() which takes an array argument 
and returns a new array with all the duplicates removed.
Examples:
 */
console.log("------removeDuplicates----------------------");
const removeDuplicates = (arr) => {
    let result = [];
    arr.filter((n, i) => {
        if (!result.includes(n)) result.push(n);
    });

    return result;
};
console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])); //  -> [10, 20, 35, 60,  70]
console.log(removeDuplicates([1, 2, 5, 2, 3])); //-> [1, 2, 5, 3]
console.log(removeDuplicates([0, -1, -2, -2, -1])); // -> [0, -1, -2]
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])); // -> ["abc", "xyz", "123", "ab", "ABC"]
console.log(removeDuplicates(["1", "2", "3", "2", "3"])); // -> ["1", "2", "3"]

/**
 * TASK 10
 * Write a function named as isPrime() which takes a 
number as an argument and returns true if the number 
is prime or returns false otherwise when invoked.
NOTE: Mathematically, Prime number is a number that 
can be divided only by itself and 1. It cannot be divided 
by any other number. The smallest prime number is 2 
and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...
NOTE: The smallest prime number is 2 and there is no 
negative prime numbers.
 */
console.log("-------isPrime-----------------------");
function isPrime(num) {
    if (num <= 1) return false;
    if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
            else return true;
        }
    }
}
console.log(isPrime(5)); //  -> true
console.log(isPrime(2)); //  -> true
console.log(isPrime(29)); //  -> true
console.log(isPrime(-5)); // -> false
console.log(isPrime(0)); // -> false
console.log(isPrime(1)); // -> false

console.log(`----------arrFactorial--------------`);
const arrFactorial = (arr) => {
    return arr.map((num) => {
        let result = num;
        if (num === 0 || num === 1) return 1;
        while (num > 1) {
            num = num - 1;
            result = result * num;
        }
        return result;
    });
};

console.log(arrFactorial([1, 2, 3, 4])); //  ->  [1, 2, 6, 24]
console.log(arrFactorial([0, 5])); //  -> [1,120]
console.log(arrFactorial([5, 0, 6])); //  -> [120, 1, 720]
console.log(arrFactorial([])); //  -> [])

console.log(`----------findBiggestNumber--------------`);
const findBiggestNumber = (str) => {
    let nums = [];
    let tempNum = "";
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            tempNum = tempNum + str[i];
            if (isNaN(str[i + i])) {
                nums.push(Number(tempNum));
                tempNum = "";
            }
        }
    }
    //   return num.sort((a, b) => b - a)[0];
    return Math.max(...nums);
};
console.log("abc$"); // -> 0
console.log("a1b4c  6#"); //  -> 6
console.log("ab110c045d"); // -> 110
console.log("525"); // -> 525
console.log("3 for 10 dollars"); // -> 10

console.log(`----------findSumNumbers--------------`);
const findSumNumbers = (str) => {
    let nums = "";
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            nums = nums + str[i];
            if (isNaN(str[i + 1])) {
                sum = sum + Number(nums);
                nums = "";
            }
        }
    }

    return sum;
};
console.log(findSumNumbers("abc$")); // -> 0
console.log(findSumNumbers("a1b4c  6#")); // -> 11
console.log(findSumNumbers("ab110c045d")); // -> 155
console.log(findSumNumbers("525")); // -> 525
console.log(findSumNumbers("3 for 10 dollars")); // -> 13


/**
* Write a function named isPowerOf3() which takes a number argument and 
returns true if given number is equal to 3 power of the X. Otherwise, return 
false. 
NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243....
NOTE: Ignore negative scenarios.
*/

console.log("------------isPowerOf3---------------");
const isPowerOf3 = (num) => {
    if (num < 1) return false;
    return (Math.log10(num) / Math.log10(3)) % 1 === 0;
};

console.log(isPowerOf3(1)); // -> true
console.log(isPowerOf3(2)); // -> false
console.log(isPowerOf3(3)); // -> true
console.log(isPowerOf3(27)); // -> true
console.log(isPowerOf3(100)); //  -> false
console.log(isPowerOf3(81)); // -> true
console.log(isPowerOf3(9)); // -> true

/**
 * Write a function named fibonacciSeries1() which takes a number n argument 
and returns the n series of Fibonacci numbers as an array.  
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
 */

console.log("------------fibonacciSeries1------------");

const fibonacciSeries1 = (num) => {
    let nums = [];
    let num1 = 0;
    let num2 = 1;
    let sum;
    for (let i = 1; i <= num; i++) {
        nums.push(num1);
        console.log(num1);
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return nums;
};
console.log(fibonacciSeries1(3)); //  -> [0, 1, 1] 2
console.log(fibonacciSeries1(5)); //  -> [0, 1, 1, 2, 3] 5
console.log(fibonacciSeries1(7)); //  -> [0, 1, 1, 2, 3, 5, 8]
console.log(fibonacciSeries1(8)); //  -> [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacciSeries1(1)); // -> [0]
console.log(fibonacciSeries1(2)); //  -> [0, 1]
// create loop

/*Write a function named fibonacciSeries2() which takes a number n argument 
and returns the nth series of Fibonacci number as a number.
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
*/
console.log("-------------fibonacciSeries2------------");

const fibonacciSeries2 = (number) => {
    let num1 = 0;
    let num2 = 1;
    let sum;

    for (let i = 2; i <= number; i++) {
        sum = num1 + num2; // 0+1// 1+1// 1+2//
        num1 = num2; //1 //1 //2 //
        num2 = sum; // 1 //2 //3
    }
    return num1;
};

console.log(fibonacciSeries2(2)); // -> 1
console.log(fibonacciSeries2(4)); // -> 2
console.log(fibonacciSeries2(8)); //  -> 13
console.log(fibonacciSeries2(9)); // -> 21
console.log(fibonacciSeries2(1)); // -> 0

/**
 * Write a function named findUniques() which takes two array of number 
arguments and returns the array which has only the unique values from both 
given arrays.
NOTE: If both arrays are empty, then return an empty array. 
NOTE: If one of the array is empty, then return unique values from the other 
array.
 */
console.log("--------------findUniques--------------");

const findUniques = (arr1, arr2) => {
    const res1 = arr1.filter((el) => arr2.indexOf(el) === -1);
    const res2 = arr2.filter((el) => arr1.indexOf(el) === -1);

    return res1.concat(res2).reduce(function (acc, curr) {
        if (!acc.includes(curr)) acc.push(curr);
        return acc;
    }, []);
};

console.log(findUniques([], [])); // -> []
console.log(findUniques([], [1, 2, 3, 2])); // -> [1, 2, 3]
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5])); // -> [1, 2, 5]
console.log(findUniques([8, 9], [9, 8, 9])); //  -> []
console.log(findUniques([-1, -2], [1, 2])); //-> [-1, -2, 1, 2]


console.log(`-----reverseNumber--------`);
const reverseNumber = (num) => {
    let reversed = 0;
    for (let i = num; i > 0; i = Math.floor(i / 10)) {
        reversed = reversed * 10 + (i % 10);
    }
    return reversed;
};
console.log(reverseNumber(371)); //  -> 173
console.log(reverseNumber(123)); //  -> 321
console.log(reverseNumber(12)); //  -> 21
console.log(reverseNumber(0)); //  -> 0
console.log(reverseNumber(111)); //  -> 111



console.log(`-----isArmstrong--------`);

const isArmstrong = (num) => {
    const separateNum = [...num.toString()];
    const sum = separateNum.reduce(
        (total, el) => total + Number(el) ** separateNum.length,
        0
    );
    return num === sum;
};
console.log(isArmstrong(153)); //  -> true
console.log(isArmstrong(123)); //  -> false
console.log(isArmstrong(1634)); //  -> true
console.log(isArmstrong(153)); //  -> true
console.log(isArmstrong(1111)); //  -> false

console.log(`-----isAnagram--------`);
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