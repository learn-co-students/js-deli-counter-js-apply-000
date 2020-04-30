function takeANumber(currentLine, name){
  currentLine.push(name); //currentLine = people's name in the line
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
}

function nowServing(currentLine){
  if (currentLine.length > 0) {
    return `Currently serving ${currentLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.';
  }
  var result = 'The line is currently:'
  for (var i = 0; i < line.length; i++) {
    var name = line[i];
    result += ` ${i+1}. ${name}`

    if (i < line.length -1) {
      result += ',';
    }
  }
  return result;
}
