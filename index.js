
function takeANumber(lineArray, name) {
  lineArray.push(name);

  return "Welcome, " + name + ". You are number " + (lineArray.indexOf(name) + 1) + " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(line) {
  var linePosition = "The line is currently: ";

  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    for(var i = 0; i < line.length-1; i++) {
      linePosition += `${i + 1}. ${line[i]}, `
    }
  }
  return linePosition + `${line.length}. ${line[line.length-1]}`
}
