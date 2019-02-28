var katzDeliLine = [];

function takeANumber(currentLine, custName) {
  currentLine.push(custName);
  return `Welcome, ${custName}. You are number ${currentLine.length} in line.`
}

function nowServing(currentLine) {
  if (currentLine.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    var currentCust = currentLine[0];
    currentLine.shift();
    return `Currently serving ${currentCust}.`;
  }
}

function currentLine(line) {
  if (line.length == 0) {
    return "The line is currently empty."
  } else {
    var lineString = 'The line is currently: '
    for (let i=0; i<line.length; i++) {
      lineString = lineString + `${[i + 1]}. ${line[i]}, `;
    }
    lineString = lineString.slice(0,-2);
    return lineString;
  }
}