var katzDeliLine = [];

function takeANumber(katzDeli, otherDeli) {

  katzDeli.push(otherDeli);
  return `Welcome, `+ otherDeli + `. You are number ` + katzDeli.length + ` in line.`;

}

function nowServing(deliLine) {
    
    if (deliLine.length === 0) {
    return "There is nobody waiting to be served!";
    }
    
    for (let i = 0; i < deliLine.length; i++) {
    let serving = deliLine[0];
    deliLine.shift();
    return "Currently serving " + serving + ".";
    }
    
}

function currentLine(line) {
  
    if (line.length === 0) {
    return "The line is currently empty.";
    }

    if (line.length !== 0) {
    return "The line is currently: 1. " + line[0] + ", 2. " + line[1] + ", 3. " + line[2];
    }
    
}