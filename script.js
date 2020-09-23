
let question1 = "How many inches of rain fell?";


let inches = Number(prompt(question1));

function rainAmount(inches) {
    
    let rainStr = ""
    
    for (let i = 0; i < inches; i++) {
        rainStr += "*"
    }

    return rainStr;
}

console.log(rainAmount(inches));

let bushels = 50; 

if (inches >= 20) {
    bushels = bushels * .90;
} else if (inches < 10) {
    bushels = bushels * .80; 
}
    
let question2 = "Did you use fertilizer?";

let usedFertilizer = prompt(question2);
let typeFertilizer;

if (usedFertilizer === "yes") {
    let question3 = "Did you use premium or regular fertilizer?"
    typeFertilizer = prompt(question3)
}

if (usedFertilizer === "no") {
    console.log(`The yield should be ${+bushels.toFixed(2)} per acre.`)
} else if (typeFertilizer === "regular") {
    bushels = bushels * 1.10;
    console.log(`The yield should be ${+bushels.toFixed(2)} per acre.`) 
} else if (typeFertilizer === "premium") {
    bushels = bushels * 1.15;
    console.log(`The yield should be ${+bushels.toFixed(2)} per acre.`) 
}

