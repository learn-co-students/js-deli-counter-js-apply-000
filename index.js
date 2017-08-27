var katzDeli = [];

function takeANumber(katzDeliLine, customerName) {
  katzDeliLine.push(customerName);
  var positionInLine = katzDeliLine.indexOf(customerName) + 1;
  return "Welcome, " + customerName + ". You are number " + positionInLine + " in line.";
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var nextInLine = katzDeliLine.shift();
    return "Currently serving " + nextInLine + ".";
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  var line = "The line is currently: ";
  for(var i = 0; i < katzDeliLine.length; i++) {
    var position = i + 1;
    if(i === katzDeliLine.length - 1) {
      line += (position + ". " + katzDeliLine[i]);
    } else {
      line += (position + ". " + katzDeliLine[i] + ", ");
    }
  }
  return line;
}
