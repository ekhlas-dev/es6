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
  let findUser = users.find((user) => {
    return user.id === id;
  });
  if (!findUser) return "user not found";
};

const users = [
  { id: 1, name: "ekhlas", mark: 75 },
  { id: 2, name: "karim", mark: 40 },
  { id: 3, name: "utsho", mark: 60 },
  { id: 4, name: "jomin", mark: 59 },
];
// console.log(findUserById(users,22))

// problem 4

const getCartTotal = (cart) => {
  let total = cart.reduce((accumulator, element) => {
    return accumulator + element.price * element.qty;
  }, 0);
  return total;
};

// let cart = [
//   { name: "pen", price: 30, qty: 3 },
//   { name: "notebook", price: 70, qty: 2 },
//   { name: "book", price: 300, qty: 5 },
//   { name: "bag", price: 1000, qty: 1 },
// ];
// console.log(getCartTotal(cart))

// problem 5

let getExpensiveItemsTotal = (carts, minPrice) => {
  let total = carts
    .filter((product) => product.price >= minPrice)
    .map((product) => product.price * product.qty)
    .reduce((accumulator,currentValue)=>accumulator+currentValue);
    return total
};

let carts = [
  { name: "pen", price: 30, qty: 3 },
  { name: "notebook", price: 700, qty: 2 },
  { name: "penBook", price: 100, qty: 3 },
  { name: "book", price: 800, qty: 5 },
  { name: "bag", price: 1000, qty: 1 },
  { name: "hedphone", price: 500, qty: 3 },
];
// console.log(getExpensiveItemsTotal(carts, 500));

// problem 6

const sortDescending = (numbers)=>{
  const number = [...numbers]
  const desenDingNumber = number.sort((a,b)=>b-a)
  return desenDingNumber
}

const numbers = [1,10,2,25,3]
// console.log(sortDescending(numbers))
// console.log(numbers)

