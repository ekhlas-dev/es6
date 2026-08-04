const user ={
    name:"ekhlas uddin",
    age:25,
    id:12034
}

const entreyUser = Object.entries(user)
// console.log(entreyUser)
for(const elemet of entreyUser){
    const[key, valu] = elemet
    // console.log(key,valu)
}

// delete user.age
// console.log(user)

const bankAccount = {
    accountName:"ekhlas uddin",
    balance: 800,
    accountId:12034
}
// console.log(bankAccount)
Object.seal(bankAccount)
delete bankAccount.balance
bankAccount.balance = 8000


let [a, b] = [1, 2];
console.log(a,b)


// const user =[1,5,5,87,84,42,41,58,12,15]
// const key = Object.keys(user)
// const value = Object.values(user)
// const entrais = Object.entries(user)
// console.log(entrais)
// for(const objectEntrais of entrais){
//     // console.log(objectEntrais)
//     const {key,values} = objectEntrais;
//     // console.log(key,values)
// }
// // console.log(entrais)

// for(const userInfo of key){
//     // console.log(userInfo)
// }
// for(const objectKey of value){
//     // console.log(objectKey)
// }
// // console.log(key)
// // console.log(value)
