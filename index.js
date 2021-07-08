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
      return "Currently serving " + currentLine.shift(0) + ".";
    }
  }
}

function currentLine(katzDeliLine) {
  var currentLine = katzDeliLine;
  var str = "The line is currently: ";

  if (currentLine.length === 0) {
    return "The line is currently empty.";
  };

  for (var i = 0; i < currentLine.length -1; i++) {
    var waiting = (i + 1) + ". " + currentLine[i] + ", ";
    str += waiting;
  }
  for (var j = i; j < currentLine.length; j++) {
    var last = (i + 1) + ". " + currentLine[i];
    str += last;
  }
  return str;
}
