let sayi = +prompt("Bir sayi giriniz");
console.log(typeof sayi);
let sayi2 = 10;
sayi = sayi + sayi2;

console.log(++sayi);

console.log(Number("123"));
console.log(Number("12.3"));
console.log(Number("0"));
console.log(Number(" "));
console.log(Number(""));
console.log(Number(null));

const myNumber = "threezeroone";
let myNumber2 = Number(myNumber);
console.log(myNumber2);
console.log(typeof myNumber2);

const dolar = "1000";
const tl = "2000";

const totalMoney = Number(dolar) + +tl;
console.log(totalMoney);
