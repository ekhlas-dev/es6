//

// function other() {
//   let name = "rahim";
//   function inner() {
//     console.log(name);
//   }
//   inner();
// }
// other();

// function outer() {
//   let name = "ekhals";
//   function inner() {
//     console.log(name);
//   }
//   return inner;
// }
// const result = outer();
// result();

// function counter (){
//     let count = 0;
//     return function(){
//         count ++
//         console.log(count)
//     }
// }
// const increment = counter();
// increment()
// increment()
// increment()

// function makeMultiplyer(x){
//     return function(y){
//         return x*y
//     }
// }
// const double = makeMultiplyer(2)
// console.log(double(5))

// function outer(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// const result = outer(10)(20)(30);

// console.log(result);

// function registerStudent (cb){
//     console.log("student infomation")
//     console.log("teacher info",cb())
//     // console.log(tch())
// }
// function studentInfo(){
//     let student = {
//         name:"ekhlas",
//         age: 26,
//         roll:21,
//         class:"xii"
//     }
//     return student
// }
// function techerInfo(){
//     let teacher = {
//         name:"ekhlas",
//         age: 26,
//         roll:21,
//         teacher: "english"
//     }
//     return teacher
// }

// registerStudent(studentInfo)
// registerStudent( techerInfo)0

let numbers = [2, 4, 6, 8, 10];

const double = numbers.map((num) => num * 2);
console.log(double);

let price = [100, 200, 300, 400, 500, 600, 700, 800, 900];
let expensive = price.filter((element,index,arr)=> {
    if(element >= 500){
        console.log("good product",element)
    }else{
        console.log("bad product",element)
    }
})

// console.log(expensive)