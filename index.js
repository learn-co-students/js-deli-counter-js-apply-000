var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var number = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${number} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`;
  }
  return `Currently serving ${katzDeliLine.shift()}.`;
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return `The line is currently empty.`;
  }
  var result = [];
  for(var i = 0; i < katzDeliLine.length; i++) {
    var name = katzDeliLine[i];
    result.push(`${i + 1}. ${name}`);
  }
  return `The line is currently: ` + result.join(', '); 
}
