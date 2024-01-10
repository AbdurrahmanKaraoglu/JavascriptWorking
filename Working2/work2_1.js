let sayi = 10;
console.log("sayi :" + sayi);

const sayi2 = 20;
// sayi2 = 25; // hata Assignment to constant variable.
console.error("Hata ile karşılaşıldı sayi2 const değişkeni değiştirilemez. sayi2 :" + sayi2);

console.warn("Uyarı ile karşılaşıldı sayi2 const değişkeni değiştirilemez. sayi2 :" + sayi2);

console.info("Bilgi ile karşılaşıldı sayi2 const değişkeni değiştirilemez. sayi2 :" + sayi2);

// console.clear();

console.table({ sayi, sayi2 });
console.table({ s1: sayi, s2: sayi2 });

console.time("zaman");
console.log("zaman ölçümü başladı");

for (let i = 0; i < 1000; i++) {
    const element = i;
}

console.log("zaman ölçümü bitti"); 3
console.timeEnd("zaman");

// alert("Merhaba Dünya");3

// alert ile kullanıcıdan veri almak
let s1 = 2;
let s2 = 3;
const cevap = prompt(s1 + "+" + s2 + "=?");
console.log(cevap);

if (cevap == (s1 + s2)) {
    alert("cevap doğru");
} else if (cevap == null) {
    alert("cevap verilmedi");
} else if (cevap == "") {
    alert("cevap boş");
}
else {
    alert("cevap yanlış");
}