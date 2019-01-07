function takeANumber(katzDeliLine, newName) {
    katzDeliLine.push(newName);
    var name = katzDeliLine.indexOf(newName);
    return "Welcome, " + katzDeliLine[name] + ". You are number " + (name + 1) + " in line.";
}

function nowServing(katzDeliLine) {
    var serving;
    if ( katzDeliLine.length == 0 ) {
        return "There is nobody waiting to be served!";
    } else {
        serving = katzDeliLine.shift();
    }
    return "Currently serving " + serving + ".";
}

function currentLine(katzDeliLine) {
    var lineOrder = "The line is currently: ";
    if ( katzDeliLine.length == 0 ) {
        return "The line is currently empty.";
    } else {
        for (var i = 0; i < katzDeliLine.length; i++ ) {
            lineOrder+= `${i+1}` + ". " + katzDeliLine[i];
            if ( i+1 < katzDeliLine.length ) {
                lineOrder+=", ";
            }
        }
    }
    
    return lineOrder;
}