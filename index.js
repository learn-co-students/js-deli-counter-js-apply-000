var katzDeliLine = [];


function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var place = ''

  for (var i = 0; i < katzDeliLine.length; i++) {
    var lineNumber = i + 1;
    place = "Welcome, " + name + ". You are number " + lineNumber + " in line."
  }
  return place;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.splice(0,1) + ".";
}
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var append = "The line is currently: ";
    for (var i = 0; i < katzDeliLine.length; i++) {
      var j = i + 1;
      if (i < katzDeliLine.length -1) {
        append += (j + ". " + katzDeliLine[i]) + ", ";
      }
      else {
        append += (j + ". " + katzDeliLine[i])
      }
    }
    return append;
  }
  else if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
}
