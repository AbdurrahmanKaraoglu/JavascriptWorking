
console.log("Hello World from app.js");

for (var i = 0; i < 10; i++) {
    console.log("i: " + i);
}


let myVariable = 2;

switch (myVariable) {
    case 1:
        console.log("myVariable is 1");
        break;
    case 2:
        console.log("myVariable is 2");
        break;
    case 3:
        console.log("myVariable is 3");
        break;
    default:
        console.log("myVariable is not 1, 2 or 3");
        break;
}

if (myVariable === 2) {
    console.log("myVariable is 2");
} else {
    console.log("myVariable is not 2");
}

let myList = [1, 2, 3, 4, 5];

myList.forEach(element => {
    console.log("element : " + element);
});

let myJson = {
    name: "John",
    age: 30,
    city: "New York"
};