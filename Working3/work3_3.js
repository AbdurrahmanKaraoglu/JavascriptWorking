// for döngüsü

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log("------------------");

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        // i 5 e esit oldugunda donguyu bitir
        break;
        // 5 i yazdirmaz 4 e kadar yazdirir. Çünkü 5 de dongu bitiyor ve 5 yazdirmiyor
    }
    console.log(i);
}

console.log("------------------");

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        // i 5 e esit oldugunda bu donguyu atla
        continue;
        // Sadece 5 i atlar digerlerini yazdirir
    }
    console.log(i);
}
console.log("------------------");

for (let i = 0; i < 10; i++) {
    console.log(i);
    // Önce i yi yazdir sonra kontrol et

    if (i == 5) {
        // i 5 e esit oldugunda donguyu bitir
        break;
        // 5 i de yazdırır. Çünkü 5 i yazdırdıktan sonra if i kontrol ediyor ve 5 e esit oldugu icin donguyu bitiriyor
    }
}

console.log("****************");

// While döngüsü

let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

console.log("------------------");

let j = 0;
while (j < 10) {
    console.log(j); // 0,1,2,3,4,5
    // Önce j yi yazdir sonra kontrol et
    if (j == 5) {
        // j 5 e esit oldugunda donguyu bitir
        break;
    }

    j++;
    // j nin değerini 1 arttır
}

console.log("------------------");

let k = 0;

while (k < 10) {
    k++;
    // k nin değerini 1 arttır
    if (k == 5) {
        // k 5 e esit oldugunda donguyu atla
        continue;
    }
    console.log(k); // 1,2,3,4,6,7,8,9,10
}

console.log("------------------");

// let l = 0;

// while (l < 10) {
//     if (l == 5) {
//         // l 5 e esit oldugunda donguyu atla
//         continue;
//     }
//     console.log(l); // 0,1,2,3,4,6,7,8,9
//     l++;
//     // l nin değerini 1 arttır
// }

console.log("------------------");

let m = 0;

while (m < 10) {
    if (m == 5) {
        // m 5 e esit oldugunda donguyu bitir
        break;
    }

    console.log(m); // 0,1,2,3,4
    m++;
    // m nin değerini 1 arttır
}

console.log("****************");


// Do While döngüsü

let n = 0;

do {
    console.log(n); // 0,1,2,3,4,5,6,7,8,9
    n++;
} while (n < 10);

console.log("------------------");

let o = 0;

do {
    console.log(o); // 0,1,2,3,4,5
    o++;
    // o nin değerini 1 arttır
} while (o < 6);

console.log("------------------");

let p = 0;

do {
    p++;
    // p nin değerini 1 arttır
    console.log(p); // 1,2,3,4,5
}while (p < 5);

console.log("------------------");

// for (let i = 0; i < 10; i++) {
//     if (i == 5) {
//         // i 5 e esit oldugunda donguyu bitir
//         return; // return sadece fonksiyonlarda kullanilir ve fonksiyonu bitirir
//         //  Illegal return statement
//     }
//     console.log(i);
// }

console.log("------------------");