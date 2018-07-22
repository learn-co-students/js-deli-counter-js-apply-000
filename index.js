//var katzDeli = [];

function takeANumber(currentLine, name) {
  var katzDeli = currentLine;
  if (currentLine.length == 0) {
    var indx = 0;

  }
  else {
    var indx = currentLine.length;

  }

  katzDeli[indx] = name;

  var numberInLine = indx + 1;
  var message = "Welcome, " + katzDeli[indx] + ". You are number " + numberInLine + " in line.";
  return message
}

function nowServing(currentLine) {
  if (currentLine === undefined || currentLine.length == 0) {
    return "There is nobody waiting to be served!"
  }
  var firstPerson = currentLine[0];
  currentLine.shift();
  return "Currently serving " + firstPerson + "."
}

function currentLine(currentLine) {
  if (currentLine === undefined || currentLine.length == 0) {
    return "The line is currently empty."
  }

  var l
  var lineList = "The line is currently: "
  for (l = 0; l < currentLine.length; l++) {
    if (l + 1 == currentLine.length) {
      lineList += l + 1 + ". " + currentLine[l]
    }
    else {
      lineList += l + 1 + ". " + currentLine[l] + ", "
    }
  }
  return lineList
}
