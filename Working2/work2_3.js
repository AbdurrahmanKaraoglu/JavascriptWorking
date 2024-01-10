// Operatörler

// Aritmetik Operatörler
// +, -, *, /, %, ++, --


let sayi1 = 10;
let sayi2 = 20;

let toplam = sayi1 + sayi2;
console.log("sayi1 :" + sayi1);
console.log("sayi2 :" + sayi2);

console.log("toplam :" + toplam);

console.log("--------------------------");

let fark = sayi1 - sayi2;
console.log("fark :" + fark);

console.log("--------------------------");

let carpim = sayi1 * sayi2;
console.log("carpim :" + carpim);

console.log("--------------------------");

let bolum = sayi1 / sayi2;
console.log("bolum :" + bolum);

console.log("--------------------------");

// Mod alma -- Sayımın çift mi tek mi olduğunu bulmak için kullanılır.
let mod = sayi2 % sayi1;
console.log("mod :" + mod);

if (mod == 0) {
    console.log("Sayı çifttir.");
} else {
    console.log("Sayı tektir.");
}

console.log("--------------------------");

let ad = "Abdurrahman";
let soyad = "Karaoğlu";
let yas = 28;
let metinYas = "28";

console.log("yas :" + yas);
console.log("metinYas :" + metinYas);

console.log("--------------------------");

console.log(metinYas + yas);
console.log(yas + metinYas);

console.log("--------------------------");

console.log(metinYas - yas); // NaN (Not a Number)
console.log(yas - metinYas);

console.log("--------------------------");
console.log(yas * metinYas);
console.log(metinYas * yas);

console.log("--------------------------");

console.log(yas / metinYas);
console.log(metinYas / yas);


console.log("--------------------------");

let result = isNaN(metinYas - yas);
console.log(result);

console.log("--------------------------");

let result2 = isNaN(yas + metinYas);
console.log(result2);

console.log("--------------------------");
let result3 = isNaN(yas);
console.log(result3);

let result4 = isNaN(metinYas);
console.log("result4 :" + result4);

console.log("--------------------------");

// Arttırma ve Azaltma Operatörleri

let sayi3 = 10;
let sayi4 = 20;

sayi3 = sayi3 + 1;
console.log("sayi3 :" + sayi3);
console.log("--------------------------");

sayi3 += 1;
console.log("sayi3 :" + sayi3);
console.log("--------------------------");

sayi3++;
console.log("sayi3 :" + sayi3);
console.log("--------------------------");

sayi3--;
console.log("sayi3 :" + sayi3);
console.log("--------------------------");

sayi4 = sayi4 - 1;
console.log("sayi4 :" + sayi4);
console.log("--------------------------");

sayi4 -= 1;
console.log("sayi4 :" + sayi4);
console.log("--------------------------");

sayi4--;
console.log("sayi4 :" + sayi4);

console.log("**********************");

console.log("Sayi3 :" + sayi3);
console.log("Sayi4 :" + sayi4);

console.log("--------------------------");

console.log("Sayi3 :" + sayi3++);
console.log("Sayi3 :" + sayi3);

console.log("--------------------------");

console.log("Sayi4 :" + sayi4--);
console.log("Sayi4 :" + sayi4);

console.log("--------------------------");

console.log("Sayi3 :" + ++sayi3);
console.log("Sayi3 :" + sayi3);

console.log("--------------------------");

console.log("Sayi4 :" + --sayi4);
console.log("Sayi4 :" + sayi4);

console.log("*****************");
console.log("Sayi3 :" + sayi3);
console.log("Sayi3 :" + (sayi3++));
console.log("Sayi3 :" + sayi3);

console.log("--------------------------");
console.log("Sayi4 :" + sayi4);
console.log("Sayi4 :" + (sayi4--));
console.log("Sayi4 :" + sayi4);
console.log("--------------------------");
console.log("Sayi3 :" + sayi3);
console.log("Sayi3 :" + (++sayi3));
console.log("Sayi3 :" + sayi3);

console.log("--------------------------");

