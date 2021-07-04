function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var lineAnnouncment = "The line is currently:"
    var lineSize = katzDeliLine.length
    var lastPerson = katzDeliLine[lineSize - 1]
    for(var i = 0; i < lineSize - 1; i++) {
      lineAnnouncment = lineAnnouncment + " " + (i+1) + ". " + katzDeliLine[i] + ",";
    }
    return lineAnnouncment + " " + lineSize + ". "+ lastPerson;
  }
}