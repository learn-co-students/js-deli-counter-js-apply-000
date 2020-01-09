function takeANumber(currLine, name) {
  currLine.push(name);
  return `Welcome, ${name}. You are number ${currLine.length} in line.`;
}

function nowServing(currLine) {
  if (currLine.length === 0) {
    return `There is nobody waiting to be served!`;
  } else {
    return `Currently serving ${currLine.shift()}.`;
  }
}

function currentLine(currLine) {
  if (currLine.length === 0) {
    return `The line is currently empty.`;
  } else {
    var numLine = [];
    for (let i = 0; i < currLine.length; i++) {
      numLine.push(` ${i + 1}. ${currLine[i]}`);
    }
    return `The line is currently:`+ numLine;
  }
  
}