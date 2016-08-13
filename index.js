var katzDeli = [];

function takeANumber(currentLine, newPerson) {
  currentLine.push(newPerson);
  return "Welcome, " + newPerson + ". You are number " + currentLine.length.toString() + " in line.";
}

function nowServing(currentLine) {
  if (currentLine.length  === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var next = currentLine.shift();
    return "Currently serving " + next + ".";
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    var currentLine = "The line is currently: ";
    var tail;
    for (var i = 1; i <= line.length; i++) {
      tail = (i !== line.length ? ", " : "");
      currentLine += i.toString() + ". " + line[i-1] + tail;
    }
    return currentLine;
  }
}
