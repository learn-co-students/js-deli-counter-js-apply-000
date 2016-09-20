var katzDeliLine = [];

var takeANumber = function(katzDeliLine, name) {
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

var nowServing = function(katzDeliLine) {
    if(katzDeliLine.length === 0) {
        return "There is nobody waiting to be served!"
    }
    else {
        var name = katzDeliLine[0];
        katzDeliLine.shift();
        return `Currently serving ${name}.`
    }
}

var currentLine = function(katzDeliLine) {
    var peopleInLine = katzDeliLine.length
    var deliLine = []
    for (let i = 1; i <= peopleInLine; i++) {
        deliLine.push(`${i}. ${katzDeliLine[i - 1]}`)
    }

    if(katzDeliLine.length === 0) {
        return "The line is currently empty.";
    }
    else {
          return `The line is currently: ${deliLine.join(', ')}`
    }
}
