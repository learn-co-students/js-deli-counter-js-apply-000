function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
    return `Currently serving ${katzDeliLine.shift()}.`;
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  
  var deliCounter = [];
  
  for (let i = 0, l = line.length; i < l; i++) {
    deliCounter.push(`${i + 1}. ${line[i]}`);
  }
  
  return `The line is currently: ${deliCounter.join(', ')}`;
}
