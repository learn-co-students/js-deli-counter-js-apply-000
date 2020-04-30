function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var position = katzDeliLine.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "There is nobody waiting to be served!";
  } 
  return `Currently serving ${katzDeliLine.shift()}.`;
}

function currentLine(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "The line is currently empty.";
  }
  //fencepost to avoid issues with commas
  var line = `The line is currently: 1. ${katzDeliLine[0]}`
  for (var i = 1; i < katzDeliLine.length; i++) {
    line += `, ${i+1}. ${katzDeliLine[i]}`
  }
  return line;
}