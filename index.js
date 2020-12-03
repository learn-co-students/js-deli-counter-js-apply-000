const samsDeli = [];

function takeANumber(deli,name) {
    deli.push(name);
    console.log(`Welcome ${name}. You are number ${(deli.indexOf(name) + 1)}`);
}

function nowServing(deli) {
    if (deli.length === 0 || deli === null) {
        console.log("There is nobody waiting to be served.");
    } else {
        console.log(`Now serving ${deli[0]}`);
        deli.shift();
    } 
}

function currentLine(deli) {
    if (deli.length === 0 || deli === null) {
        console.log("The line is currently empty.");
    } else {
        let msg = '';
        for (let i = 0; i < deli.length; i++) {
            msg += `${i+1}. ${deli[i]}, `;
        }
        console.log(`The line is currently: ${msg}`);
    }
}