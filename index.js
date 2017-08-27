var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + "." + " You are number " + (katzDeliLine.indexOf(name) + 1) + " in line.";
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var curLine = "The line is currently: ";
    for (var i = 0; i < katzDeliLine.length; i++) {
      curLine += (i + 1) + ". " + katzDeliLine[i];
      if (i < katzDeliLine.length -1) {
        curLine += ", ";
      }
    }
    return curLine;
  } else {
    return "The line is currently empty.";
  }
}
