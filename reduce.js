const numbers = [10, 20, 30];

const result = numbers.reduce((acc, current) => {
  console.log("acc =", acc);
  console.log("current =", current);
  return acc + current;
}, 0);

// console.log(result)
const arr = [1, 2, 3];
const results = arr.reduce((acc, current) => {});
// console.log(results)

const num = [100, 50, 5, 30, 80, 20];
const minNum = num.reduce((a, b) => {
  return a < b ? a : b;
});
// console.log(minNum)

const users = [
  { name: "Aklas", age: 26 },
  { name: "Rahim", age: 30 },
  { name: "Karim", age: 22 },
];

const maxAge = users.reduce((largeAge, currentAge) => {
  return largeAge.age > currentAge.age ? largeAge : currentAge;
});
console.log(maxAge);

const cart = [
  { name: "Phone", price: 30000 },
  { name: "Headphone", price: 2000 },
  { name: "Charger", price: 1500 }
];

const cartPriceSum = cart.reduce((sum, current)=>{
    return sum + current.price ;
},0)
console.log(cartPriceSum)