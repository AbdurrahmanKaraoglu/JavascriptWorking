// Primitive type: number,string,boolean,null,undefined,symbol
// Reference type: object,array,function

// number
let sayi = 10;
console.log("sayi :" + sayi);
console.log(typeof sayi);


// string
let isim = "Abdurrahman";
console.log("isim :" + isim);
console.log(typeof isim);

// boolean
let dogruMu = true;
console.log("dogruMu :" + dogruMu);

// null
let bos = null;
console.log("bos :" + bos);
console.log(typeof bos);

// undefined
let tanimsiz;
console.log("tanimli :" + tanimsiz);
console.log(typeof tanimsiz);

// symbol
// let simge = Symbol();
// console.log("simge :" + simge);
// console.log(typeof simge);


// number
let sayi2 = 20.24;
console.log("sayi2 :" + sayi2);
console.log(typeof sayi2);

// string
let cumle = "Abdurrahman \"Karaoğlu\"";
console.log("cumle :" + cumle);

// cumle = 'Abdurrahman "Karaoğlu"'; // confirm.log is not a function hatası veriyor.
// confirm.log("cumle :" + cumle); 

cumle = 'Abdurrahman\'ın bugun işi var';
console.log("cumle :" + cumle);

cumle = `Abdurrahman'ın bugun işi var`;
console.log("cumle :" + cumle);

cumle = `Abdurrahman'ın bugun işi var ${sayi2}`;
console.log("cumle :" + cumle);

cumle = "Abdurrahman'ın bugun işi var";
console.log("cumle :" + cumle);
console.log("--------------------------");
let ad = "Abdurrahman";
let soyad = "Karaoğlu";

cumle = "Merhaba " + ad + " " + soyad;
console.log("cumle :" + cumle);

//template literal (backtick)
cumle = `Merhaba ${ad} ${soyad}`;
console.log("cumle :" + cumle);

cumle = `Merhaba ${ad} ${soyad} ${10 + 20}`;
console.log("cumle :" + cumle);


console.log("--------------------------");
console.log("ad uzunluğu : " + ad.length);
console.log("ad 0. karakteri : " + ad[0]);
console.log("ad 1. karakteri : " + ad[1]);
console.log("ad 2. karakteri : " + ad[2]);

console.log("soyad uzunluğu : " + soyad.length);
console.log("soyad 0. karakteri : " + soyad[0]);
console.log("--------------------------");

console.log("10" + 20);
console.log(10 + 20);
console.log("10" + "20");
console.log(10 + "20");

console.log("--------------------------");

// boolean
let dogruMu2 = false;
console.log("dogruMu2 :" + dogruMu2);
console.log(typeof dogruMu2);

console.log("--------------------------");
//undefined
let tanimsiz2;
console.log("tanimsiz2 :" + tanimsiz2);
console.log(typeof tanimsiz2);
tanimsiz2 = 10;
console.log("tanimsiz2 :" + tanimsiz2);
console.log(typeof tanimsiz2);
tanimsiz2 = "Abdurrahman";
console.log("tanimsiz2 :" + tanimsiz2);
console.log(typeof tanimsiz2);
tanimsiz2 = true;
console.log("tanimsiz2 :" + tanimsiz2);
console.log(typeof tanimsiz2);
tanimsiz2 = null;
console.log("tanimsiz2 :" + tanimsiz2);
console.log(typeof tanimsiz2);

console.log("--------------------------");

// null
let bos2 = null;
console.log("bos2 :" + bos2);
console.log(typeof bos2);

console.log("--------------------------");

let myJson = {
    "ad": "Abdurrahman",
    "soyad": "Karaoğlu",
    "yas": 28,
    "dogruMu": true,
    "map": {
        "key": "value",
        "ad": "Abdurrahman",
        "soyad": "Karaoğlu",
        "yas": 28
    },
    "array": [
        1,
        2,
        3
    ],
    "fonksiyon": function () {
        console.log("fonksiyon");
    },
    "json": {
        "ad": "Abdurrahman",
        "soyad": "Karaoğlu",
        "yas": 28
    }
};

console.log(myJson);

myJson.fonksiyon();
