function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  var engPosition = katzDeliLine.length;
  return "Welcome, " + newName + ". You are number " + engPosition + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length >= 1) {
    return "Currently serving " + katzDeliLine.shift() + ".";
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var lineString = "The line is currently: ";
    for (var i = 0; i < katzDeliLine.length; i++) {
      lineString += (i + 1) + ". " + katzDeliLine[i] + ", ";
    }
    return lineString.slice(0,-2);
  }
}