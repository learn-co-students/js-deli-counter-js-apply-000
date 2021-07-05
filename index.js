var katzDeliLine = [];
function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;
  }
function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
} else { 
  return "There is nobody waiting to be served!";
}
}

function currentLine(katzDeliLine) {
  var cLine = [];
  for (var i = 0; i < katzDeliLine.length; i++) {
  var str = ` ${i+1}. ${katzDeliLine[i]}`;
  cLine.push(str);
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else { 
    return `The line is currently:` + cLine;
  }
}