var katzDeliLine = [];


function takeANumber(katzDeliLine, nameOfNewPerson) {
  katzDeliLine.push(nameOfNewPerson);
  return "Welcome, " + nameOfNewPerson + ". You are number " + katzDeliLine.length + " in line.";
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}


function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var text = "The line is currently: ";
    for (var i = 0; i < katzDeliLine.length; i++) {
      if (i < katzDeliLine.length - 1) {
        text += (i + 1) + ". " + katzDeliLine[i] + ", ";
      } else {
        text += katzDeliLine.length + ". " + katzDeliLine[katzDeliLine.length - 1];
      }
    }
    return text;
  } else {
    return "The line is currently empty.";
  }
}

