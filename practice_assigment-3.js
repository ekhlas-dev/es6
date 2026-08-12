function studentIntroduction(student) {
  if (
    typeof student !== "object" ||
    student === null ||
    !("name" in student) ||
    !("age" in student) ||
    !("course" in student)
  )
    return "invalid";
  const { name, age, course } = student;
  return `My name is ${name}. I am ${age} years old. I am learning ${course}.`;
}
// console.log(
//   studentIntroduction({
//     name: "Rafi",
//     age: 18,
//     course: "JavaScript",
//   }),
// );

// problem 2

function filterActiveUsers(users) {
  if (!Array.isArray(users) || users.length === 0) return "invalid";
  for (const user of users) {
    if (!Object.hasOwn(user, "isActive")) return "invalid";
  }
  return users.filter((user) => user.isActive === true);
}
// console.log(filterActiveUsers("users"));
