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

const numbers = [2, 7, 10, 15, 18, 21];

const countEvenNumber = numbers.filter((num) => num % 2 !== 0);
console.log(countEvenNumber)
