// truthy and falsy values

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var yas = 30;

if (yas) {
    console.log("Yas var");
}
else {
    console.log("Yas yok");
}

yas = 0;

if (yas) {
    console.log("Yas var");
}
else {
    console.log("Yas yok");
}

let isim = "";

if (isim) {
    console.log("Isim var");
}
else {
    console.log("Isim yok");
}

isim = "Abdurrahman";

if (isim) {
    console.log("Isim var");
}
else {
    console.log("Isim yok");
}

isim = null;

if (isim) {
    console.log("Isim var");
}
else {
    console.log("Isim yok");
}
yas = 28;
yas = undefined;

if (yas) {
    console.log("Yas var");
}
else {
    console.log("Yas yok");
}

let dogumYili = 1995;

dogumYili = "Abdurrahman";

if (dogumYili) {
    console.log("Dogum yili var");
}
else {
    console.log("Dogum yili yok");
}

console.log(dogumYili * 2);
if(dogumYili * 2){
    console.log("Dogum yili var");
}
else{
    console.log("Dogum yili yok");
}