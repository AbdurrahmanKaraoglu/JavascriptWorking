console.log('work2.js');

var sayi = 10;
console.log("sayi :" + sayi);

let sayi2 = 20;
console.log("sayi2 :" + sayi2);
sayi2 = 25;
console.log("sayi2 :" + sayi2);

const sayi3 = 30;
console.log("sayi3 :" + sayi3);
// sayi3 = 35; // hata Assignment to constant variable.
// console.log(sayi3);

// let 1sayi = 40; // hata Identifier starts immediately after numeric literal
let sayı = 50; // unicode karakterler kullanılabilir. TÜrkçe karakterler kullanılmamalı.
console.log("sayı :" + sayı);


let sayi4;
console.log("sayi4 :" + sayi4); // undefined

let sayi5 = null;
console.log("sayi5 :" + sayi5); // null

let sayi6 = 60;
console.log("sayi6 :" + sayi6);

sayi6 = "Yazı";
console.log("sayi6 :" + sayi6);

sayi6 = true;
console.log("sayi6 :" + sayi6);

const sayi7 = Math.PI;
console.log("sayi7 :" + sayi7);

const sayi8 = Math.random();
console.log("sayi8 :" + sayi8);

const sayi9 = Math.random() * 100;
console.log("sayi9 :" + sayi9);

const sayi10 = Math.round(sayi9);
console.log("sayi10 :" + sayi10);
