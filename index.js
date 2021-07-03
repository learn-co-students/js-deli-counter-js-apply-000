
function takeANumber(line, newPerson) {
  var lineLength = line.push(newPerson);
  return `Welcome, ${newPerson}. You are number ` + lineLength + ` in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + line.shift() + ".";
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    var numberedLine = [];
    var position = 1;
    var i;
    for (i = 0; i < line.length; i++) {
      numberedLine.push(` ` + position + `. ${line[i]}`);
      position++;
    }
    return "The line is currently:" + numberedLine.toString();
  }
}