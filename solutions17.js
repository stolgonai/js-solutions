console.log(`-------findMedian-------------------`)
/*Write a function named findMedian() which takes two arrays of numbers as 
its arguments and return the median of the two sorted arrays. 
NOTE: The median is the middle number of a sorted array. So the median of 
[1,3], [2] would be 2. If the array has an even length, you are to find the average 
of the 2 middle numbers
*/
function findMedian(arrNum1, arrNum2) {
    if (arrNum2.length === 0) return arrNum1[0]
    let maxNum = Math.max(...arrNum1)
    let minNum = Math.min(...arrNum2)

    return ((minNum - maxNum) / 2) + maxNum
}
// console.log(findMedian([1, 2], [3, 4])) //  -> 2.5
// console.log(findMedian([4], [3]))   //  -> 3.5
// console.log(findMedian([4], []))    //   -> 4
// console.log(findMedian([0], [0, 1])) //    -> 0 




console.log(`-----------calculateFactorial---------------`)
/*Write a function named calculateFactorial() which takes a number as an 
argument and returns the factorial of that number.
Note: Factorial is the product of all positive integers less than or equal to a 
given positive integer and denoted by that integer and an exclamation point. 
Thus, factorial seven is written 7!, meaning 1 × 2 × 3 × 4 × 5 × 6 × 7. Factorial 
zero is defined as equal to 1.
*/
function calculateFactorial(num) {
    if (num <= 1) return 1
    let result = 1
    for (let i = 1; i <= num; i++) {
        result *= i
    }
    return result
}


// console.log(calculateFactorial(0)) //-> 1
// console.log(calculateFactorial(1)) //-> 1
// console.log(calculateFactorial(5)) //-> 120
// console.log(calculateFactorial(6)) //-> 720
// console.log(calculateFactorial(10)) // -> 3628800
// console.log(calculateFactorial(4)) //-> 24

console.log(`--------------calculateGCD------------`)
/*Write a function named calculateGCD() which takes two numbers as 
arguments and returns the greatest common divisor of the two numbers.
NOTE: GCD is a mathematical concept used to describe the largest number that 
divides two or more integers without leaving a remainder. In other words, it is 
the largest number that is a common factor of two or more numbers.
Examples:
*/

// helper function
function findDivider(num) {
    let divider = []
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            divider.push(i)
        } else {
            divider.push(1)
        }
    }
    return divider.filter((el, index) => divider.indexOf(el) === index).sort((a, b) => b - a)
}


function calculateGCD(num1, num2) {
    if (num1 === 0) return num2
    if (num2 === 0) return num1

    let largestDivNum1 = findDivider(num1)
    let largestDivNum2 = findDivider(num2)
    return largestDivNum1.filter((el, index) => largestDivNum2.includes(el))[0]
}

// console.log(calculateGCD(8, 12))   // -> 4
// console.log(calculateGCD(17, 5))   // -> 1
// console.log(calculateGCD(48, 18))   //  -> 6
// console.log(calculateGCD(0, 5))   //-> 5
// console.log(calculateGCD(21, 14))   //  -> 7
// console.log(calculateGCD(60, 48))   //  -> 12

console.log(`---------calculateLCM-----------------`)
/*Write a function named calculateLCM() which takes two numbers as 
arguments and returns the least common multiple of the two numbers.
NOTE: LCM is a mathematical concept used to describe the largest number that 
divides two or more integers without leaving a remainder. In other words, it is 
the largest number that is a common factor of two or more numbers.
*/
//helper function
const multiply = (maxNum, num) => {
    let result = []
    for (let i = 1; i <= maxNum; i++) {
        result.push(num * i)
    }
    return result
}
const calculateLCM = (num1, num2) => {
    if (num1 === 0 || num2 === 0) return 0

    let maxNum = Math.max(num1, num2)

    const numsOfNum1 = multiply(maxNum, num1)
    const numsOfNum2 = multiply(maxNum, num2)

    return numsOfNum1.filter((num) => numsOfNum2.includes(num))[0]

}


console.log(calculateLCM(8, 12))   // -> 24
console.log(calculateLCM(17, 5))   // -> 85
console.log(calculateLCM(48, 18))   //  -> 144
console.log(calculateLCM(0, 5))   //-> 0
console.log(calculateLCM(21, 14))   //  -> 42
console.log(calculateLCM(60, 48))   //  -> 240


