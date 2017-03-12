function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return ("Welcome, " + newName + ". You are number " + katzDeliLine.length + " in line.");
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return ("The line is currently empty.");
  }

  else {
    var result = "The line is currently:"
    var i = 0;
    for (i = 0; i < katzDeliLine.length - 1; i++) {
      result += " " + (i + 1) + ". " + katzDeliLine[i] + ",";
    }
    result += " " + (i + 1) + ". " + katzDeliLine[i];  
  }
  return result;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return ("There is nobody waiting to be served!");
  }
  else {
    var first = katzDeliLine.shift();
    var result = "Currently serving " + first + ".";
  }
  return result;
}