
var katzDeli = [];
var katzDeliLine = [];

function takeANumber(KatzDeliLine, name) {
  KatzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + (KatzDeliLine.indexOf(name) + 1) + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var serving = katzDeliLine[0];
    katzDeliLine.shift(serving);
    return "Currently serving " + serving + ".";
  }

  return "There is nobody waiting to be served!";
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var line = "The line is currently: "
    for (var i = 0; i < katzDeliLine.length; i++) {
      if (i === katzDeliLine.length - 1) {
        line += (i + 1) + ". " + katzDeliLine[i];
      } else {
        line += (i + 1) + ". " + katzDeliLine[i] + ", ";
      }
    }

    return line;
  }

  return "The line is currently empty.";
}
