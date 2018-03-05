var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (typeof katzDeliLine != "undefined" && katzDeliLine != null && katzDeliLine.length != null && katzDeliLine.length > 0) {
    var serving = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + serving + ".";
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (typeof katzDeliLine != "undefined" && katzDeliLine != null && katzDeliLine.length != null && katzDeliLine.length > 0) {
    var currentLine = "The line is currently: "
    for (var i = 0; i < katzDeliLine.length; i++) {
      if ((i + 1) < (katzDeliLine.length)) {
      currentLine += i+1 + ". " + katzDeliLine[i] + ", ";
      } else {
      currentLine += i+1 + ". " + katzDeliLine[i];
      }
    }
    return currentLine;
  } else {
    return "The line is currently empty."
  }
}
