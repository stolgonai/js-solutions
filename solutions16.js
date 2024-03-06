console.log(`-------toInitials-------------------`)
/*Write a function named toInitials() which takes a string argument considered 
to be full name and returns initials of the given full name.
NOTE: Initials should be separated with a space and followed with a period.
Assume you will always be given first name and last name only. */
function toInitials(str) {
    let convertedStr = str.split(" ")
    return convertedStr.reduce((res, item) => {
        res += item[0] + '. '
        return res
    }, "").trim()

}

console.log(toInitials("Joe Doe"))    // -> "J. D."
console.log(toInitials("Alex Reyes")) // -> "A. R."
console.log(toInitials("Tom Cruise")) // -> "T. C."
console.log(toInitials("Bruce Willis"))    //  -> "B. W."
console.log(toInitials("Ja Le"))  // -> "J. L."


console.log(`-----------hasNumbers---------------`)
/*Write a function named hasNumbers() which takes a string argument and 
returns true if there is a number and false if there isn’t. 
*/
function hasNumbers(str) {
    if (str.trim().length === 0) return false
    const nums = "1234567890"
    for (let i = 0; i < str.length; i++) {
        if (str.includes(nums[i])) {
            return true
        }
    }
    return false
}
console.log(hasNumbers(""))    // -> false
console.log(hasNumbers("John is 34 years old")) //  -> true
console.log(hasNumbers("Hello 3"))  //  -> true
console.log(hasNumbers("125$"))    // -> true
console.log(hasNumbers("   a   "))  //  -> false
console.log(hasNumbers("      "))  // -> false
console.log(hasNumbers("!@#$%^&*()_+")) //  -> false

console.log(`--------------elementLength------------`)
/*Write a function named elementLength() which takes an array argument and 
returns the length of each element as a separate array.
*/
function elementLength(arr) {
    return arr.map(el => el.length)
}
console.log(elementLength(["Hello", "World"]))  //  -> [ 5, 5 ]
console.log(elementLength(["Apple", "Banana", "Orange", "Pear"]))   //  -> [ 5, 6, 6, 4 ]
console.log(elementLength(["BMW", "Mercedes", "Audi"]))  //  -> [ 3, 8, 4 ]
console.log(elementLength([]))   //  -> [ ]
console.log(elementLength(["Trampoline", "", "Tennis", "Basketball"]))  //  -> [ 10, 0, 6, 10 ]

console.log(`---------isArraySumEvenOrOdd-----------------`)
/*Write a function named isArraySumEvenOrOdd() which takes an array of 
numbers and calculates if the sum of its elements is even or odd.
Note: If the array is empty return even.
*/
function isArraySumEvenOrOdd(arr) {
    if (arr.length === 0) return "even"
    let sum = arr.reduce((res, num) => res + num, 0)
    if (sum % 2 === 0) {
        return "even"
    }
    return "odd"
}
console.log(isArraySumEvenOrOdd([])) //  -> "even"
console.log(isArraySumEvenOrOdd([0, -1, -5])) //      -> "even"
console.log(isArraySumEvenOrOdd([7, 1, 8, 1]))    //     ->  "odd”
console.log(isArraySumEvenOrOdd([0, 0])) //  ->  "even"
console.log(isArraySumEvenOrOdd([1, 1, 1, 1, 1]))   //   ->  "odd”


console.log(`----------reverse----------------`)

/*Write a function named reverse() which takes a string argument and returns the given string
reversed.
*/
function reverse(str) {
    let converted = str.split(" ")
    if (converted.length < 2) {
        return str.split("").reverse().join("")
    } else {
        return converted.reduce((tempResCont, word) => {
            let resOfOneWord = word.split("").reverse().join("")
            tempResCont.unshift(resOfOneWord)
            return tempResCont
        }, []).join(" ")
    }
}
console.log(reverse("Hello World")) //  -> "dlroW olleH"
console.log(reverse("TechGlobal"))  //  -> "labolGhceT"
console.log(reverse("Basketball is fun"))   //  -> "nuf si llabteksaB"
console.log(reverse(""))    //  -> ""
console.log(reverse("Apples 456"))  //  -> "654 selppA"


console.log(`----------reverseWords----------------`)
/**
 * Write a function named reverseWords() which takes a string argument and returns a string
with each word within that string reversed but still in the same order as the initial string.
*/
function reverseWords(str) {
    let converted = str.split(" ")
    if (converted.length < 2) {
        return str.split("").reverse().join("")
    } else {
        return converted.reduce((tempResCont, word) => {
            let resOfOneWord = word.split("").reverse().join("")
            tempResCont.push(resOfOneWord)
            return tempResCont
        }, []).join(" ")
    }
}
console.log(reverseWords("Hello World"))    //  -> "olleH dlroW"
console.log(reverseWords("TechGlobal")) //  -> "labolGhceT"
console.log(reverseWords("Basketball is fun"))  //  -> "llabteksaB si nuf"
console.log(reverseWords(""))   //  -> "”
console.log(reverseWords("Apples 456")) //  -> "selppA 654"

