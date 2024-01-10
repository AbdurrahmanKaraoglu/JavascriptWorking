/* Ödev 1
Bir değişken oluşturun ve bu değişkende saniye değerini tutun.
Bu saniye değerini dakika ve saniye değerine çevirin ve ekrana yazdırın.
*/

/* Ödev 2
Bir değişken oluşturun ve bu değişkende fahrenheit cinsinden sıcaklık değerini tutun.
Bu sıcaklık değerini celcius ve kelvin cinsine çevirin ve ekrana yazdırın.
100 fahrenheit = 37.7778 celcius ve 310.927 kelvin
Hesaplama formülleri: https://www.rapidtables.com/convert/temperature/how-fahrenheit-to-celsius.html
Hesaplama formülü : celcius = (fahrenheit - 32) / 1.8 veya celcius = 5/9 * (fahrenheit - 32)
*/

/* Ödev 3
Bir yıl değerinin artık yıl olup olmadığını hesaplayın.
Bir yılın artık olması için ya 400'e tam bölünmesi gerekir.
Ya da 4'e tam bölünüp 100'e tam bölünmemesi gerekir.
400'e tam bölünürse artık yıldır.   
4'e tam bölünür 100'e tam bölünmezse artık yıldır.

4100 artık yıl değildir.
*/

// Çözüm 1

let saniye = 1200;
let dakika = saniye / 60;
let saniye2 = saniye % 60;

let saat = dakika / 60;

console.log(saniye + " saniye " + dakika + " dakika ve " + saniye2 + " saniyedir.");
console.log(saat + " saat " );
console.log("---------------------");
// Çözüm 2

let fahrenheit = 100;
let celcius = (fahrenheit - 32) / 1.8;
let kelvin = 5/9 * (fahrenheit - 32) + 273;

let celcius2 = 5/9 * (fahrenheit - 32);
let kelvin2 = celcius2 + 273;


console.log(fahrenheit + " fahrenheit " + celcius + " celcius ve " + kelvin + " kelvin'dir.");
console.log(fahrenheit + " fahrenheit " + celcius2 + " celcius ve " + kelvin2 + " kelvin'dir.");
console.log("---------------------");

// Çözüm 3

let yil = 4100;
let artikYil = yil % 400 == 0 || (yil % 4 == 0 && yil % 100 != 0);


console.log(yil + " artık yıl mı? " + artikYil);
 

console.log(yil % 400);
console.log(yil % 4);
console.log(yil % 100);

console.log(yil % 400 == 0);
console.log(yil % 4 == 0);
console.log(yil % 100 != 0);


console.log("---------------------");

let s1 = "10";
let s2 = parseInt(s1);

console.log("s1: " + s1);
// s1 in tipi
console.log(typeof s1);
console.log("s2: " + s2);
// s2 nin tipi
console.log(typeof s2);

console.log("---------------------");

let s3 = "10.5";
let s4 = parseFloat(s3);

console.log("s3: " + s3);
// s3 in tipi
console.log(typeof s3);
console.log("s4: " + s4);
// s4 nin tipi
console.log(typeof s4);

console.log("---------------------");

let s5 = 10.54534;
let s6 = s5.toFixed(2);

console.log("s5: " + s5);
// s5 in tipi
console.log(typeof s5);

console.log("s6: " + s6);
// s6 nin tipi
console.log(typeof s6);

