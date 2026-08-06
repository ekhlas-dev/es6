let statu = "order place";
for (let i = 1; i <= 3; i++) {
  let status = "proces item" + i;
  // console.log(status)
}
// console.log("final status: ",statu)

function recipGenerator(name, price, qty) {
  const total = `${name} X${qty} = ${price * qty} Taka`;
  return total;
}
// console.log(recipGenerator("Pen", 20, 3));
// console.log(recipGenerator("rajer", 20, 3));

function discountCalculator(discount, ...price) {
  // let total = 0;
  // for(let i = 0 ; i<price.length; i++){
  //     total += price[i]
  // }
  // return total
  const total = price.reduce(
    (accoumaltor, currentValue) => accoumaltor + currentValue,
    0,
  );
  //   console.log(total);
  let discountAmount = (total * discount) / 100;
  let totalDiscountApply = total - discountAmount;
  return totalDiscountApply;
}
// console.log(discountCalculator(10, 100, 200, 50, 300));

const products = [
  { name: "Phone", price: 300 },

  { name: "Laptop", price: 700 },

  { name: "Mouse", price: 50 },
];

const total = products.reduce((acc, product) => console.log(acc,product), 0);

// console.log(total);
