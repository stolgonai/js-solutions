console.log(`-------toCamelCase-------------------`)
/*Write a function named toCamelCase() which takes a string as its argument 
and returns a new string in camelCase. Assume the string only contains letters 
and spaces
*/
const toCamelCase = str => {
    const convertedData = str.trim().toLowerCase().split(" ")

    if (convertedData.length === 1) return str

    const firstPart = convertedData.splice(0, 1)

    let output = ""
    for (let i = 0; i < convertedData.length; i++) {
        if (convertedData[i] != "") {

            let firstInd = convertedData[i][0].toUpperCase()
            let restOfWord = convertedData[i].slice(1)
            output += `${firstInd}${restOfWord}`
        }
    }
    return `${firstPart}${output}`
}
// console.log(toCamelCase("first name"))  //  ->"firstName"
// console.log(toCamelCase("last     name"))   //  ->"lastName"
// console.log(toCamelCase("   ZIP CODE"))    // ->"zipCode"
// console.log(toCamelCase("I Learn Java Script"))    //   -> "iLearnJavaScript"
// console.log(toCamelCase("helloWorld")) //    -> “helloWorld”



console.log(`-----------toSnakeCase---------------`)
/*Write a function named toSnakeCase() which takes a string as its argument 
and returns a new string in snake_case. Assume the string only contains letters 
and spaces
NOTE: In snake case words are separated by underscores (_) and are all 
lowercase.
*/
const toSnakeCase = str => {
    const convertedData = str.trim().toLowerCase().split(" ")

    if (convertedData.length === 1) return str

    return convertedData.filter(word => word != "").join("_")

}
// console.log(toSnakeCase("first name")) // ->"first_name"
// console.log(toSnakeCase("last    name"))    //  ->"last_name"
// console.log(toSnakeCase("    I love Java Script"))  //  ->"i_love_java_script"
// console.log(toSnakeCase("already_snake_case"))  //   -> "already_snake_case"
// console.log(toSnakeCase("hello"))  //    -> "hello"

console.log(`--------------alternatingCases------------`)
/*Write a function named alternatingCases() which takes a string argument and 
returns the string with alternating capitalization.
NOTE: The first letter should always be uppercase and non-letter characters are 
ignored.
*/
const alternatingCases = str => {
    if (str.length === 0) return ""

    const convertStr = str.toLowerCase()

    let output = ""

    for (let i = 0; i < convertStr.length; i++) {
        if (i % 2 === 0) {
            output += convertStr[i].toUpperCase()
        } else {
            output += convertStr[i].toLowerCase()
        }
    }
    return output
}
// console.log(alternatingCases("Hello"))  //  -> "HeLlO"
// console.log(alternatingCases("basketball")) //  -> "BaSkEtBaLl"
// console.log(alternatingCases("Tech Global"))    //  -> "TeCh GlObAl"
// console.log(alternatingCases("")) // -> ""
// console.log(alternatingCases("123!@#aB"))  // -> "123!@#Ab"

console.log(`---------isNeutral-----------------`)
/*Write a function named isNeutral() that takes two strings comprised of + and 
-, and return a new string which shows how the two strings interact in the 
following way:
When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are 
shown as the number 0.
Note: The two strings will be the same length.
*/
const isNeutral = (str1, str2) => {
    let result = '';
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === '+' && str2[i] === '+') {
            result += '+';
        } else if (str1[i] === '-' && str2[i] === '-') {
            result += '-';
        } else {
            result += '0';
        }
    }
    return result;
}
console.log(isNeutral("-+", "-+"))  //  ->   "-+"
console.log(isNeutral("-++-", "-+-+")) //           ->  "-+00"
console.log(isNeutral("--++--", "++--++")) //     ->  "000000"
console.log(isNeutral("+++", "+++"))    //            ->  "+++"

console.log(`----------isTrueOrFalse----------------`)

/*Write a function named isTrueOrFalse() which takes a string with sets of character/words
separated by space. Looking at the first letter of each word (case insensitive-"A" and "a" should
be treated the same), you need to determine whether it falls into the positive/first half of the
alphabet ("a"-"m") or the negative/second half ("n"-"z"). Return true if there are more (or
equal) positive words than negative words, false otherwise.
NOTE: alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
NOTE: Ignore all the digits, spaces and special characters.
Examples
*/
const isTrueOrFalse = str => {
    const convertedData = str.toUpperCase()
    let am = 0;
    let nz = 0;
    const amChars = "ABCDEFGHIJKLM";
    const nzChars = "NOPQRSTUVWXYZ";
    for (let i = 0; i < convertedData.length; i++) {
        if (amChars.includes(convertedData[i])) {
            am++
        }
        if (nzChars.includes(convertedData[i])) {
            nz++
        }
        console.log(am, nz)
        return am >= nz
    }
}
console.log(isTrueOrFalse("A big brown fox caught a bad rabbit"))   //  -> true
console.log(isTrueOrFalse("Xylophones can obtain Xenon.")) //   ->  false
console.log(isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK"))    // -> true
console.log(isTrueOrFalse("All FOoD tAsTEs NIcE for someONe")) // -> true
console.log(isTrueOrFalse("Got stuck in the Traffic")) // -> false


