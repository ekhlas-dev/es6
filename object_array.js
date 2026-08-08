// const addGrade = (students) => {
//   const getGrade = (mark) => {
//     return mark > 90 ? "A+" : mark > 80 ? "A" : mark > 70 ? "B" : "fail";
//   };
//   const modifieStudent = students.map((student) => {
//     const { name, mark } = student;
//     const newStudentWithGrade = { name, mark, grade: getGrade(mark) };
//     return newStudentWithGrade;
//   });
//   return modifieStudent;
// };

// const students = [
//   { name: "ekhlas", mark: 85 },
//   { name: "karim", mark: 93 },
//   { name: "rahim,", mark: 50 },
// ];

// console.log(addGrade(students));

// const addGrade =(students)=>{
//     const getMark =(mark)=>{
//         return mark > 90?"A+":mark>80 ? "A" : mark > 70 ? "B" : "fail"
//     }
//     const modifiStudent = students.map((student)=>{
//         const {name,mark} = student
//         const newStudentObj = {name,mark, grade: getMark(mark)}
//         return newStudentObj
//     })
//     return modifiStudent
// }

// const students = [
//   { name: "ekhlas", mark: 85 },
//   { name: "karim", mark: 93 },
//   { name: "rahim,", mark: 50 },
// ];

// console.log(addGrade(students))


const calculator = (products)=>{
    let totalItems = 0;
    let totalPrice = 0;
    for(let product of products){
        const {name,price,qty} = product
        totalItems += qty
        totalPrice +=(price*qty)
    }
    console.log(totalItems,totalPrice)
    return `total ${totalItems || 0} items ${totalPrice || 0} Taka`
}



const products =[
    //  { name: "pen",price:20, qty: 2 },
    //  { name: "noteBook",price:200, qty: 3 },
     { name: "hadephone",price:0, qty: 0 },
]
console.log(calculator(products))