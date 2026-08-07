//

// const numbers = [10, 20, 30, 40, 50];
// const totalSum = numbers.reduce((sum, num) => sum + num);
// console.log(totalSum)

// const numbers = [2, 3, 4, 5];
// const numMultiply = numbers.reduce((mul, num) => mul * num);
// console.log(numMultiply)

// const numbers = [12, 45, 7, 89, 21];
// const maxNum = numbers.reduce((largeNum, current) => {
//   return current > largeNum ? current : largeNum;
// });
// console.log(maxNum);

// const numbers = [12, 45, 7, 89, 21];
// const minNumber = numbers.reduce((minNumber, current)=>{
//     return current < minNumber ? current : minNumber
// })
// console.log(minNumber)

// const words = ["apple", "banana", "cat"];
// const totalWordCount = words.reduce((count,word)=>{
// return count + word.length
// },0)
// console.log(totalWordCount)

// const numbers = [2, 7, 10, 15, 18, 21];

// const countEvenNumber = numbers.filter((num) => num % 2 !== 0);
// console.log(countEvenNumber)

// function calculateDiscountTotal(discount, ...prices) {
//   const totalPriceSum = prices.reduce((accumulator, cuunetValue) => {
//     return accumulator + cuunetValue;
//   }, 0);
//   const discountAmount = (discount * totalPriceSum) / 100;
//   let totalAfterDiscount = totalPriceSum - discountAmount
//   return totalAfterDiscount
// }
// console.log(calculateDiscountTotal(10, 100, 200, 50, 300))

// function productDiscount (discount, ...prices){
//     const total = prices.reduce((accumulator,currentVaule)=>accumulator+currentVaule,0)
//     const discountAmount = (discount * total) /100
//     const totalAfterDiscount = total - discountAmount
//     return totalAfterDiscount
// }
// console.log(productDiscount(10,100,200,50,300))

// let arr1 = [1,2,3,4,5,7,8,9]
// let arr2 = [2,3,5,6,7,88,9,1]
// let margeArray = [...arr1,...arr2]
// console.log(margeArray)
// let newArray = [...new Set(margeArray)]

// const calculateShiping = (orderAmount, ShippingFees = 60)=>{
//     return orderAmount >= 1000 ? "free shiping" : `shipping fee : ${ShippingFees}`
// }
// console.log(calculateShiping(1200))
// console.log(calculateShiping(500))
// console.log(calculateShiping(500,1000))

// const gradeCount = (mark) => {
//   return typeof mark !== "number"
//     ? "invalid"
//     : mark >= 90
//       ? "A+"
//       : mark >= 80
//         ? "A"
//         : mark >= 70
//           ? "B"
//           : "fail";
// };
// console.log(gradeCount(95));
// console.log(gradeCount(86));
// console.log(gradeCount("ekhlas"));

// const responceExtructor = (obj) => {
//   const {
//     user: { name, age },
//   } = obj;
//   return {name,age};
// };
// console.log(responceExtructor({ user: { name: "ekhlas", age: 26 } }));

// let a =10;
// let b = 20;
// [b,a] = [a,b]
// console.log(a)

// const mostExpensiveProduct = (product) => {
//   const keys = Object.keys(product);
//   let heightProduct = 0;
//   let expensiveProduct = "";
//   for (let key of keys) {
//     if (heightProduct < product[key]) {
//       heightProduct = product[key];
//       expensiveProduct = key;
//     }
//   }
//   return `${expensiveProduct} : ${heightProduct}`;
// };
// console.log(
//   mostExpensiveProduct({
//     pen: 20,
//     book: 200,
//     bag: 500,
//     bat: 750,
//     latop: 50000,
//   }),
// );

// const person = {
//   name: "Aklas",
//   age: 26,
//   country: "Bangladesh",
// };

// console.log(Object.entries(person))
// for (let [key,value] of Object.entries(person) ){
//   console.log(key,value)
// }

// console.log(Object.entries(person))

// const persons = {
//   name: "Aklas",
//   age: 26,
// };
// for(let per of Object.entries(persons)){
//   console.log(per)
// }
// console.log(typeof persons)

// const products = {
//   pen: 20,
//   book: 100,
//   bag: 500,
//   mouse: 700,
// };
// const result = Object.entries(products).filter(([key, value]) => value > 50);
// console.log(result);

// // const result = Object.entries(products).filter(
// //   ([key, value]) => value > 50
// // );

// // console.log(result);
// const arr = [10, 20, 30];

// const [a, c] = arr;

// console.log(a);
// console.log(c);