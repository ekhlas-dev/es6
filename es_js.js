function defaultName(name = "shoron"){
    return "hellow, " + name;
}
console.log(defaultName("ekhlas"))
console.log(defaultName())
console.log(defaultName("siham"))

function calculator (number, tax=50){
    return number + tax
}
console.log(calculator(1000,))