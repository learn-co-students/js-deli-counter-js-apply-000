var katzDeliLine = [];

function takeANumber(currLine, newName) {
    currLine.push(newName);
    // returns welcome message including new person's position in line:
    console.log(`Welcome, ${newName}. You are number ${currLine.length} in line.` )
    return `Welcome, ${newName}. You are number ${currLine.length} in line.` 
    // "Welcome, Ada. You are number 1 in line."
        // #1 in this case is 0 index
}



function nowServing(currLine) {

    if (currLine.length < 1) {
        return "There is nobody waiting to be served!";
    }
    let current = 'Currently serving ' + currLine[0] + '.';
    currLine.shift();
    return current;
}




function currentLine(currLine) {
    let line = 'The line is currently: ';

    if (currLine.length < 1) {
        return "The line is currently empty."
    }

    for (var i = 0; i < currLine.length; i++) {
        line += `${i + 1}. ${currLine[i]}`;
        if (i !== currLine.length - 1) {
            line += ', ';
        }
    }
    console.log(line);
    return line;
}