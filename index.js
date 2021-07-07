function takeANumber(deliLine, name) {
  deliLine.push(name);
  return `Welcome, ${name}. You are number ${deliLine.length} in line.`;
}


function nowServing(deliLine) {
  if (deliLine.length > 0) {
    return `Currently serving ${deliLine.shift()}.`;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}


function currentLine(deliLine) {
  var lineInfo = "The line is currently:";
  var count = deliLine.length;
  if (count > 0) {
    for (var i = 0; i < (count - 1); i++) {
      lineInfo += ` ${i + 1}. ${deliLine[i]},`;
    }
    lineInfo += ` ${count}. ${deliLine[count - 1]}`;
    return lineInfo;
  }
  else {
    return "The line is currently empty.";
  }
}