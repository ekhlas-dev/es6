// 1 number problem solve calculateBill
const calculateBill = (amount, taxRate = 0.05) => {
  return amount + amount * taxRate;
};

// console.log(calculateBill(1000));
// console.log(calculateBill(1000, 0.1));
// console.log(calculateBill(2000));

// problem buildProfileCard complite

const buildProfileCard = (user) => {
    const { name, title, company }= user
    return `"${name} ${title} at ${company}"`
};
// console.log(
//   buildProfileCard({
//     name: "Arif",
//     title: "Developer",
//     company: "Programming Hero",
//   }),
// );

// problem 3 getLowestPrice 

const getLowestPrice = (prices)=>{
    return Math.max(...prices)
}
// console.log(getLowestPrice([340, 120, 560, 90]))

// problem 4 swapValues

const swapValues =(a,b)=>{

// console.log(swapValues(10,5))

// problem 5 getEmployeeDept