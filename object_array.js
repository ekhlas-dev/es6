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

const addGrade =(students)=>{
    const getMark =(mark)=>{
        return mark > 90?"A+":mark>80 ? "A" : mark > 70 ? "B" : "fail"
    }
    const modifiStudent = students.map((student)=>{
        const {name,mark} = student
        const newStudentObj = {name,mark, grade: getMark(mark)}
        return newStudentObj
    })
    return modifiStudent
}

const students = [
  { name: "ekhlas", mark: 85 },
  { name: "karim", mark: 93 },
  { name: "rahim,", mark: 50 },
];

console.log(addGrade(students))
