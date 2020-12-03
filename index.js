const samsDeli = [];

function takeANumber(deli,name) {
    samsDeli.push(name);
    console.log(`Welcome ${name}. You are number ${(deli.indexOf(name) + 1)}`);
}

function nowServing(deli) {
    if (deli.length === 0) {
        console.log("There is nobody waiting to be served.");
    } else {
        console.log(`Now serving ${deli[0]}`);
        deli.shift();
    } 
}

function currentLine(deli) {
    if (deli.length === 0) {
        console.log("The line is currently empty.");
    } else {
        for (let i = 0; i < deli.length; i++) {
            console.log(`The line is currently: ${i+1}. ${deli[i]}, `);
        }
    }
}