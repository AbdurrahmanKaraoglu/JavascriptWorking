//Aritmetik atama operatörleri
// +=, -=, *=, /=, %=

let sayi1 = 10;
let sayi2 = 5;

// sayi1 += sayi2; // sayi1 = sayi1 + sayi2
// console.log("sayi1 : " + sayi1);

// sayi1 -= sayi2; // sayi1 = sayi1 - sayi2
// console.log("sayi1 : " + sayi1);


// sayi1 *= sayi2; // sayi1 = sayi1 * sayi2
// console.log("sayi1 : " + sayi1);

// sayi1 /= sayi2; // sayi1 = sayi1 / sayi2
// console.log("sayi1 : " + sayi1);

// sayi1 %= sayi2; // sayi1 = sayi1 % sayi2
// console.log("sayi1 : " + sayi1);

console.log("---------------------");
// Sonucu boolean olarak döndürür.

console.log("sayi1 > sayi2 : " + (sayi1 > sayi2)); // sayi1 sayi2'den büyük mü?

console.log("sayi1 < sayi2 : " + (sayi1 < sayi2)); // sayi1 sayi2'den küçük mü?

console.log("sayi1 >= sayi2 : " + (sayi1 >= sayi2)); // sayi1 sayi2'den büyük veya eşit mi?

console.log("sayi1 <= sayi2: " + (sayi1 <= sayi2)); // sayi1 sayi2'den küçük veya eşit mi?

console.log("sayi1 == sayi2: " + (sayi1 == sayi2)); // sayi1 sayi2'ye eşit mi?

console.log("sayi1 != sayi2: " + (sayi1 != sayi2)); // sayi1 sayi2'ye eşit değil mi?

console.log("sayi1 === sayi2: " + (sayi1 === sayi2)); // sayi1 sayi2'ye eşit mi?

console.log("sayi1 !== sayi2: " + (sayi1 !== sayi2)); // sayi1 sayi2'ye eşit değil mi?

console.log("---------------------");

let yas = 40;
let metinYas = "40";

console.log("yas == metinYas : " + (yas == metinYas)); // yas metinYas'a eşit mi?

console.log("yas === metinYas : " + (yas === metinYas)); // yas metinYas'a eşit mi?

console.log("yas !== metinYas : " + (yas !== metinYas)); // yas metinYas'a eşit değil mi?

// == ve === arasındaki farklar
// == sadece değerleri karşılaştırır.
// === değerleri ve tipleri karşılaştırır.

// != ve !== arasındaki farklar
// != sadece değerleri karşılaştırır.
// !== değerleri ve tipleri karşılaştırır.


console.log("---------------------");

// Mantıksal operatörler
// &&, ||, !
// && (ve) operatörü, iki koşul da doğruysa true döner.
// || (veya) operatörü, iki koşuldan biri doğruysa true döner.
// ! (değil) operatörü, koşul doğruysa false, yanlışsa true döner.

let sayi3 = 10;
let sayi4 = 5;

console.log("sayi3 > sayi4 && sayi3 < 20 : " + (sayi3 > sayi4 && sayi3 < 20)); // sayi3 sayi4'ten büyük ve sayi3 20'den küçük mü?
console.log("sayi3 > sayi4 || sayi3 < 20 : " + (sayi3 > sayi4 || sayi3 < 20)); // sayi3 sayi4'ten büyük veya sayi3 20'den küçük mü?

console.log("!(sayi3 > sayi4) : " + !(sayi3 > sayi4)); // sayi3 sayi4'ten büyük değil mi?

console.log("sayi3 > sayi4 && sayi3 > 20 : " + (sayi3 > sayi4 && sayi3 > 20)); // sayi3 sayi4'ten büyük ve sayi3 20'den küçük mü?
console.log("sayi3 > sayi4 || sayi3 > 20 : " + (sayi3 > sayi4 || sayi3 > 20)); // sayi3 sayi4'ten büyük veya sayi3 20'den küçük mü?


console.log("---------------------");

// İşlem önceliği
// 1. ()
// 2. !, ++, --
// 3. *, /, %
// 4. +, -
// 5. <, >, <=, >=
// 6. ==, !=, ===, !==
// 7. &&
// 8. ||
// 9. =, +=, -=, *=, /=, %=

let sayi5 = 10;
let sayi6 = 5;

console.log("sayi5 + sayi6 * 2 : " + (sayi5 + sayi6 * 2)); // sayi5 + (sayi6 * 2)
console.log("(sayi5 + sayi6) * 2 : " + ((sayi5 + sayi6) * 2)); // (sayi5 + sayi6) * 2

console.log("---------------------");

// Ternary operatörü
// koşul ? true : false

let sayi7 = 10;
let sayi8 = 5;

console.log("sayi7 > sayi8 ? true : false = " + (sayi7 > sayi8 ? true : false)); // sayi7 sayi8'den büyük mü? doğruysa true, yanlışsa false döner.

console.log("---------------------");