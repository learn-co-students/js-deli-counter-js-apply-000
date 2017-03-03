function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  return ("Welcome, " + person + ". You are number " + katzDeliLine.length + " in line.");
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var out = katzDeliLine.shift();
    return "Currently serving " + out + ".";
  }
}

function currentLine(katzDeliLine) {
  var outString = "The line is currently: ";
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    for (var i  = 0; i <= katzDeliLine.length - 1; i++) {
      outString = outString + (i + 1) + ". " + katzDeliLine[i];
      if (i !== katzDeliLine.length - 1) {
        outString = outString + ", ";
      }
    }
  return outString;
  }
}
