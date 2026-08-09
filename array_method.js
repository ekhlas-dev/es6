// bulk discount applier
const applayDiscount = (prices, discountRate = 5) => {
  console.log(prices);
  let productDiscount = prices.map((price) => {
    let discoutCalculate = price - (price * discountRate) / 100;
    return discoutCalculate;
  });
  return productDiscount;
};
let productPrices = [500, 1000, 250];

// console.log(applayDiscount(productPrices, 10));

const getPassingStudent = (students, threshhold) => {
  const filterStudentMark = student.filter((student) => {
    return student.mark >= threshhold;
  });
  return filterStudentMark;
};
let student = [
  { name: "ekhlas", mark: 75 },
  { name: "karim", mark: 40 },
  { name: "utsho", mark: 60 },
  { name: "jomin", mark: 59 },
];
// console.log(getPassingStudent(student, 50));

// problem 3

const findUserById = (users, id) => {
  let findUser = users.find((user)=>{
    return user.id === id;
  })
  if(!findUser) return "user not found"
};

const users = [
  { id: 1, name: "ekhlas", mark: 75 },
  { id: 2, name: "karim", mark: 40 },
  { id: 3, name: "utsho", mark: 60 },
  { id: 4, name: "jomin", mark: 59 },
];
// console.log(findUserById(users,22))

// problem 4

