var katzDeliLine= [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var line = "The line is currently: ";
  var x = 1;
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    for (x; x < katzDeliLine.length; x++) {
      line = line + `${x}. ${katzDeliLine[x - 1]}, `;
    }
    line = line + `${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length - 1]}`;
  }
  return line;
}