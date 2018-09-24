function takeANumber(katzDeliLine, custName) {
  katzDeliLine.push(custName);
  return "Welcome, " + custName.toString() + ". You are number " + (katzDeliLine.length).toString() + " in line.";
}

function nowServing(katzDeliLine) {
  var custName = katzDeliLine.shift();
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + custName + ".";
  }
}

function currentLine(katzDeliLine) {
  var lineLength = katzDeliLine.length;
  var i = 0;
  var currentLine = "The line is currently: ";
  if (lineLength === 0) {
    return "The line is currently empty."
  }
  while (i < lineLength) {
    currentLine = currentLine + (i+1).toString() + ". " + katzDeliLine[i].toString();
    if (i !== lineLength-1) {
      currentLine = currentLine + ", ";
    }
    i++;
  }
  return currentLine;
}
