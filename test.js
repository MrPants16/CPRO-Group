console.log("Hello, World!");

let x = (3 * (36) ** 2) / (18 + 9);

console.log(x);
const outputDiv = document.getElementById("output");
const consoleDiv = document.getElementById("console");
outputDiv.innerText = x;

// let result = confirm("Are you gay?");

// let name = promt("titLE");

if (x == 144) {
    console.log("yup");
} else {
    console.log("nope");
}

const y = 5;
switch (y) {
    case 5:
        consoleDiv.innerText += "five";
        break;
    case 10:
        consoleDiv.innerText += "ten";
        break;
    case 15:
        consoleDiv.innerText += "fifteen";
        break;
    default:
        consoleDiv.innerText += "not in switch";
        break;
}

let z = "s";
(z == "z") ? console.log(true) : console.log(false);

console.log("10" == 10);
console.log("10" === 10); // takes type into account when comparing values

console.log(1 && 0);
console.log(null && 5); // returns first false value 
console.log(true || true);
console.log(false || true); // returns true and when true it always return last true value
console.log(!"1");
