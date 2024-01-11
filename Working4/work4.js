
// Soru 1
// Klavyeden girilen 3 sayının ortalamasını alan bir uygulama yazınız.

// let sayi1 = parseInt(prompt("1. sayıyı giriniz"));
// let sayi2 = parseInt(prompt("2. sayıyı giriniz"));
// let sayi3 = parseInt(prompt("3. sayıyı giriniz"));

// let ortalama = (sayi1 + sayi2 + sayi3) / 3;

// console.log("Girilen sayıların ortalaması: " + ortalama);

// Soru 2
// Klavyden kenarları girilen bir üçgenin çeşidini veren bir uygulama yazınız.

// let kenar1 = parseInt(prompt("1. kenarı giriniz"));
// let kenar2 = parseInt(prompt("2. kenarı giriniz"));
// let kenar3 = parseInt(prompt("3. kenarı giriniz"));

// if (kenar1 == kenar2 && kenar2 == kenar3) {

//     console.log("Eşkenar üçgen");
// }
// else if (kenar1 == kenar2 || kenar1 == kenar3 || kenar2 == kenar3) {

//     console.log("İkizkenar üçgen");
// }
// else {
//     console.log("Çeşitkenar üçgen");
// }

// Soru 3
// Klavyeden girilen vize ve final notlarına göre öğrencinin dersi geçip geçmediğini söyleyen bir uygulama yazınız.
// Geçme notu 50, vizenin %40'ı, finalin %60'ı alınarak hesaplanacaktır.

// let vize = parseInt(prompt("Vize notunu giriniz"));
// let final = parseInt(prompt("Final notunu giriniz"));

// let ortalama = vize * 0.4 + final * 0.6;

// if (ortalama >= 50) {
//     console.log("Tebrikler dersi geçtiniz ortalamanız: " + ortalama + "");
// }
// else {
//     console.log("Üzgünüm dersi geçemediniz ortalamanız: " + ortalama + "");
// }

// Soru 4
// Kendi adınızı ekrana 5 kez yazdıran bir uygulama yazınız. Tüm döngü yapılarını kullanınız.

// for (let i = 0; i < 5; i++) {
//     console.log("Abdurrahman");
// }

// let i = 0;
// while (i < 5) {
//     console.log("Abdurrahman");
//     i++;
// }

// i = 0;
// do {
//     console.log("Abdurrahman");
//     i++;
// } while (i < 5);

// Soru 5
// 1 den 100 e kadar olan sayıların toplamını bulan bir uygulama yazınız.

// let toplam = 0;
// for (let i = 1; i <= 100; i++) {
//     toplam += i;
// }
// console.log("Toplam: " + toplam);

// Soru 6
// 1 den 10 a kadar olan sayıları sıra ile ve aralarında virgül olacak şekilde ekrana yazdıran bir uygulama yazınız.

// let sayilar = "";
// for (let i = 1; i <= 10; i++) {
//     if (i == 10) {
//         sayilar += i;
//         break;
//     }
//     sayilar += i + ",";
// }

// console.log(sayilar);

// Soru 7
// Klavyeden girilen sayının faktöriyelini bulan bir uygulama yazınız.

// let sayi = parseInt(prompt("Sayı giriniz"));
// let faktoriyel = 1;
// for (let i = 1; i <= sayi; i++) {
//     faktoriyel *= i;
// }
// console.log("Faktoriyel: " + faktoriyel);


// Soru 8
// Aşağıda tanımı verilen f(x,y) fonksiyonunu klavyeden girilen x ve y değerleri için hesaplayan bir uygulama yazınız.

// x > 0 , y<0 ise f(x,y) = 4x+2y+4
// x > 0 , y=0 ise f(x,y) = 2x-y+3
// x < 0 , y>0 ise f(x,y) = 3x+4y+5

// let x = parseInt(prompt("x değerini giriniz"));
// let y = parseInt(prompt("y değerini giriniz"));

// let sonuc = 0;
// if (x > 0 && y < 0) {
//     sonuc = 4 * x + 2 * y + 4;
// } else if (x > 0 && y == 0) {
//     sonuc = 2 * x - y + 3;
// } else if (x < 0 && y > 0) {
//     sonuc = 3 * x + 4 * y + 5;
// }
// console.log("Sonuç: " + sonuc);

// Soru 9
// 100'lük sistemde girilen notun harf karşılığını veren bir uygulama yazınız.

// let not = parseInt(prompt("Notunuzu giriniz"));
// let harf = "";

// if (not >= 90) {
//     harf = "AA";
// } else if (not >= 85) {
//     harf = "BA";
// } else if (not >= 80) {
//     harf = "BB";
// } else if (not >= 75) {
//     harf = "CB";
// }
// else if (not >= 70) {
//     harf = "CC";
// }
// else if (not >= 65) {
//     harf = "DC";
// }
// else if (not >= 60) {
//     harf = "DD";
// }
// else if (not >= 55) {
//     harf = "FD";
// }
// else {
//     harf = "FF";
// }


// console.log("Harf: " + harf);

// // Switch Case ile çözümü
// switch (true) {
//     case not >= 90:
//         harf = "AA";
//         break;
//     case not >= 85:
//         harf = "BA";
//         break;
//     case not >= 80:
//         harf = "BB";
//         break;
//     case not >= 75:
//         harf = "CB";
//         break;
//     case not >= 70:
//         harf = "CC";
//         break;
//     case not >= 65:
//         harf = "DC";
//         break;
//     case not >= 60:
//         harf = "DD";
//         break;
//     case not >= 55:
//         harf = "FD";
//         break;
//     default:
//         harf = "FF";
//         break;
// }
// console.log("Harf: " + harf);

// Soru 10
// Çarpım tablosunu ekrana yazdıran bir uygulama yazınız.

for (let i = 1; i <= 10; i++) {
    let satir = "";
    for (let j = 1; j <= 10; j++) {
        satir += i * j + " ";
    }
    console.log(satir);
}
