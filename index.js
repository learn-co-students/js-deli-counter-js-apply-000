function takeANumber(katzDeliLine, personName) {
    katzDeliLine.push(personName); // Adds the personName to the array the katzDeliLine array
    return `Welcome, ${personName}. You are number ${katzDeliLine.length} in line.`;
    // Output: Welcome, PERSON NAME. You are number NUMBER in line.
}

function nowServing(katzDeliLine) {
    if (katzDeliLine.length === 0) {
        return "There is nobody waiting to be served!";
    } else {
        return `Currently serving ${katzDeliLine.shift()}.`; //.shift() removes the first item from the array
    }
}

function currentLine(katzDeliLine) {
    if (katzDeliLine.length === 0) { // If katzDeliLine = 0.  Also could be !katzDeliLine.length.
        return `The line is currently empty.`;
    } else {
        var str =  `The line is currently: `;
        var lineNumber = 1; // Starts at 1 higher
        var comma = ", ";
        for (var i in katzDeliLine) {
            if (lineNumber === katzDeliLine.length) {
                comma = "";
            }

            str += `${lineNumber}. ${katzDeliLine[i]}${comma}`;
            lineNumber++; // Incrementing the lineNumber by 1 and the person's name in the katzDeliLine array and add comma
        }

        return str // I was going to hard code this to pass the test but my brother told me that was stupid :)
    }
}
