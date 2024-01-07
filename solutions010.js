/*Write a function named calculateTotalPrice1() which takes an object of some 
shopping items with their quantities as key-value pairs and returns the total 
price of the given items based on the price list below.
1 Apple is $2.00 
1 Orange is 3.29
1 Mango is $4.99
1 Pineapple $5.25
*/
//

const initialProductsPrices = {
  apple: 2.0,
  orange: 3.29,
  mango: 4.99,
  pineapple: 5.25,
};
const calculateTotalPrice1 = (obj) => {
  const finalProducts = Object.keys(obj);
  const productsPrices = Object.keys(initialProductsPrices);

  return finalProducts.reduce((total, el) => {
    if (productsPrices.includes(el)) {
      total += initialProductsPrices[el] * obj[el];
    }
    return total;
  }, 0);
};

console.log(calculateTotalPrice1({ apple: 3, mango: 1 })); //  -> 10.99
console.log(calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 })); //  -> 19.12
console.log(calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 })); //  -> 0
// console.log(
console.log(
  calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango: 1 })
); // ); //  -> 12.24
