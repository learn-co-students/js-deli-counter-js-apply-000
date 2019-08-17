function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var position = katzDeliLine.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var line = `The line is currently: 1. ${katzDeliLine[0]}` //fencepost to avoid issues with commas
    for (var i = 1; i < katzDeliLine.length; i++) {
      line += `, ${i+1}. ${katzDeliLine[i]}`
    }
    return line;
  }
}