function takeANumber(katzDeliLine, newName) {
  var currentLine = katzDeliLine;

  for (var i = katzDeliLine.length; i >= 0; i--) {
    currentLine.push(newName);
    return "Welcome, " + newName + ". You are number " + (i + 1) + " in line."
  }
}

function nowServing(katzDeliLine) {
  var currentLine = katzDeliLine;

  for (var i = currentLine.length; i >=0; i-- ) {

    if (currentLine.length === 0) {
      return "There is nobody waiting to be served!"
    } else {
      return "Currently serving " + currentLine[0] + ".";
    }

  }
}
