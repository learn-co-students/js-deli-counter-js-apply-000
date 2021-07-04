

function takeANumber(katzDeliLine, newname) {
var katzDeli = [];
katzDeliLine.push(newname);
return `Welcome, ${newname}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  var katzDeli = [];
  if(katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!";
}
return `Currently serving ${katzDeliLine.shift()}.`;
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
var numbersAndNames = [];

  for (let i = 0; i < katzDeliLine.length; i++) {
    numbersAndNames.push(`${i + 1}. ${katzDeliLine[i]}`);
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`;
}