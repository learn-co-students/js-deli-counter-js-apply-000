var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  var firstInLine = katzDeliLine[0];
  katzDeliLine.splice(0, 1);
  if (katzDeliLine.length > 0) {
    return "Currently serving " + firstInLine + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var i = 0
  var whosInLine = [];
  while(i < katzDeliLine.length) {
     whosInLine.push(" " + (i + 1) + ". " + katzDeliLine[i]);
     i++;
  }
  if (katzDeliLine.length > 0) {
    return "The line is currently:" + whosInLine;
  } else {
    return "The line is currently empty.";
  }
}
