// Ternary Operator

let s1 = 10;
let s2 = 20;

let sonuc = s1 > s2 ? "Buyuk" : "Kucuk";
console.log(sonuc);


// Switch Case

let gun = 1;

switch (gun) {
    case 1:
        console.log("Pazartesi");
        break; // break olmazsa alttaki case de calisir
    case 2:
        console.log("Sali");
        break; // break switch i bitirir
    case 3:
        console.log("Carsamba");
        break;
    case 4:
        console.log("Persembe");
        break;
    case 5:
        console.log("Cuma");
        break;
    case 6:
        console.log("Cumartesi");
        break;
    case 7:
        console.log("Pazar");
        break;
    default:
        console.log("Hatali gun");
        break;
}

let a = 10;
let b = 20;

switch (true) {
    case a > b:
        console.log("a buyuk");
        break;
    case a < b:
        console.log("b buyuk");
        break;
    default:
        console.log("a ve b esit");
        break;
}