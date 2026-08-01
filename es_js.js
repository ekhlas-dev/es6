// function defaultName(name = "shoron"){
//     return "hellow, " + name;
// }
// console.log(defaultName("ekhlas"))
// console.log(defaultName())
// console.log(defaultName("siham"))

// function calculator (number, tax=50){
//     return number + tax
// }
// console.log(calculator(1000,))

// templete string

// let name = " ekhlas"
// let location =`dhaka gulshan`
// let price = 500
// const quantity = 5
// let message = `hello my name is${name}. and my is ${location}. order hedphone ${price * quantity}`
// console.log(message)

// const number = [10,56,56,78]
// const fruits = ["Apple","Banana","Orange"];
// console.log(...fruits)

// console.log(...number)

// const arr1 = [1,2,3,4]
// const arr2 = [4,5,6,7]
// const result = [...arr1,...arr2]
// console.log(result)

// const num = [1, 2, 3, 4, 5, 6];
// const result = [777, ...num, 888];
// console.log(result);

// const user = {
//   name: "rahim",
//   age: 58,
// };
// const newUser = {...user}
// console.log(newUser)

// const user1 = {
//     name: "kabir",
// }
// const user2 ={
//     age: 54
// }
// const person ={...user1,...user2}
// console.log(person)

// const user = {
//     name:"Rahim",
//     age:20
// };

// const update = {
//     ...user,
//     age:30
// };
// console.log(update)

// const word = "hellow bangladesh"
// const leters = [...word]
// console.log(leters)

// let nums = [10,20,30];

// console.log(Math.max(...nums))

// function sum (...numbers){
//     let total = 0 
//     for(const num of numbers){
//         total +=num
//     }
//     return total
// }
// // console.log(sum(10,20,30))

// // 

// function person(name,...skills){

// // console.log(name);

// // console.log(skills);

// }

// person("Rahim","JS","React","Node");

// // array destructure

// const nums = [1,20,30,40,5,0]
// let maxNumber =Math.max(...nums)
// let minNumber = Math.min(...nums)
// // console.log(maxNumber,minNumber)

// const car = {
//     band:"toyta",
//     showBand(){
//         console.log(this.band)
//     }
// }
// // car.showBand()

// const student = {
//     name: "ekhlas",
    
// }
// console.log(student.name)

// const person1 = {
//   name: "Rahim",

//   say() {
//     console.log(this.name);
//   }
// };

// const person2 = {
//   name: "Karim",

//   say() {
//     console.log(this.name);
//   }
// };

const person1 = {
  name: "Rahim",

  say() {
    console.log(this.name)
  }
};

const person2 = {
  name: "Karim",

  say() {
    console.log(this.name)
  }
};

// person1.say();
// person2.say();


// 

const person = {
  name: "Rahim",

  greet() {
    return this.name;
  }
};

const admin = {
  name: "Karim"
};

admin.greet = person.greet;

console.log(admin.greet());

const user = {
  name: "Aklas",

  show() {
    console.log(this.name);

    function inner() {
      console.log(this.name);
    }

    inner();
  }
};

user.show();