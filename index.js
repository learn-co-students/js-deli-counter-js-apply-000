function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  var position = katzDeliLine.length;
  return "Welcome, " + newName + ". You are number " + position + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  var firstPerson = katzDeliLine[0];
  katzDeliLine.splice(0, 1);
  return "Currently serving " + firstPerson + ".";
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }

  var currLine = 'The line is currently: ';
  for (var i = 0; i < katzDeliLine.length; i++) {
    var currPostion = i + 1
    var currPerson = katzDeliLine[i];
    currLine += currPostion + ". " + currPerson + ", ";
  }
  return currLine.slice(0, currLine.length - 2);
}
