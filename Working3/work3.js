let benimYasim = 30;

let onunYasi = 40;

if (benimYasim > onunYasi) {
    console.log("Ben ondan buyugum");
} else if (benimYasim < onunYasi) {
    console.log("Ben ondan kucugum");
} else {
    console.log("Benimle ayni yasta");
}


// Switch Case

let gun = 1;

switch (gun) {

    case 1:
        console.log("Pazartesi");
        break;
    case 2:
        console.log("Sali");
        break;
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