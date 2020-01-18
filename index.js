function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if(line.length === 0)
    return "There is nobody waiting to be served!";
  else
    var name = line[0].toString();
    line.shift();
    return `Currently serving ${name}.`;
}

function currentLine(line) {
  if(line.length == 0)
    return "The line is currently empty.";
  else {
    var lineString = "";
    let commaFill = "";
    for(var i = 0; i < line.length; i++) {
      lineString = lineString + `${commaFill}${i + 1}. ${line[i].toString()}`
      commaFill = ", ";
    }
    return `The line is currently: ${lineString}`;
  }
    
}