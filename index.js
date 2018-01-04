var katzDeliLine = [];

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var string = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
    return string;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var string = `The line is currently: 1. ${katzDeliLine[0]}`;
    for (let i = 1; i < katzDeliLine.length; i++) {
      string += `, ${i+1}. ${katzDeliLine[i]}`;
    }
    return string;
  }
}