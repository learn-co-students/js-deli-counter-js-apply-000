function takeANumber(katzDeliLine, name) {
  var currentLine = katzDeliLine;

  for (var i = katzDeliLine.length; i >= 0; i--) {
    currentLine.push(name)
    return "Welcome, " + name + ". You are number " + (i + 1) + " in line."
  }
}

function nowServing(katzDeliLine) {
  var currentLine = katzDeliLine

  for (var i = katzDeliLine.length; i >= 0; i--) {
    if (currentLine.length === 0) {
      return "There is nobody waiting to be served!"
    } else {
      return "Currently serving " + currentLine.shift(0) + "."
    }
  }
}

function currentLine(katzDeliLine) {
  var currentLine = katzDeliLine;
  var str = "The line is currently: "

  if (currentLine.length === 0) {
    return "The line is currently empty.";
  }

  for (var i = 0; i < katzDeliLine.length -1; i++) {
    str += (i + 1) + ". " + currentLine[i] + ", "
  }
  for (var j = i; j < katzDeliLine.length; j++) {
    str += (i + 1) + ". " + currentLine[i]
  }
  return str;
}
