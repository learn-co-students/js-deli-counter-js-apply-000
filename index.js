var katzDeli = []; // empty array to start the day

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var currentPosition = katzDeliLine.length;
  return ("Welcome, " + name + ". You are number " + currentPosition + " in line.")
}

function nowServing(katzDeliLine) {
  if (katzDeliLine[0] === undefined) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(katzDeliLine) {
  var currentLine = "";
  if (katzDeliLine.length > 0) {
    for (var i = 0; i < katzDeliLine.length; i++) {
      if (i + 1 == katzDeliLine.length) { // last or only number
        currentLine = currentLine + " " + (i + 1) + ". " + katzDeliLine[i];
      } else {
        currentLine = currentLine + " " + (i + 1) + ". " + katzDeliLine[i] + "," //other number
      }
    }
  } else {
    return "The line is currently empty."
  }
  return "The line is currently:" + currentLine;
}
