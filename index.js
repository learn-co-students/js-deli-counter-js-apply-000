let bensWaitingList = []

//adds a person to the line
function takeANumber(line, name) {
    line.push(name);
    let position = line.length;
    return `Welcome, ${name}. You are number ${position} in line.`
}

//calls now serving person, shifts line.
function nowServing(line) {
    let calling = line[0];
    if (line.length === 0) {
        return 'There is nobody waiting to be served!';
    } else {
        line.shift();
    } return `Currently serving ${calling}.`;
}

//checks who's on the line.
function currentLine(line) {
    let checkLine = [];
    if (line.length > 0) {
        for (let i=0; i<line.length; i++) {
            checkLine += (i + 1) + ". " + line[i] + ", ";
        }
        checkLine = checkLine.slice(0, checkLine.length - 2);
        return `The line is currently: ${checkLine}`;

    } else {
        return 'The line is currently empty.';
    }
}

