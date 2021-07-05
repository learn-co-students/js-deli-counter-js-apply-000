function takeANumber(line, name) {
  line[line.length] = name;
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  var curr = katzDeliLine.shift();
  return `Currently serving ${curr}.`;
}


function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  var currLine = "The line is currently: ";
  var i;
  for(i = 1; i <= line.length; i++) {
    currLine += i + ". " + line[i - 1];
    if (i < line.length) {
      currLine += ", ";
    }
  }
  return currLine;
}
