var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(num) {
  if (num.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = num[0];
    num.splice(0, 1);
    return "Currently serving " + name + ".";
  }
}

function currentLine(movingLine) {
  var line = [];
  if (movingLine.length === 0) {
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < movingLine.length; i++) {
      line += (i + 1) + ". " + movingLine[i] + ", "
    }
    line = line.slice(0, line.length - 2)
    return "The line is currently: " + line
  }
}