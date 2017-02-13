var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  var placeInLine = katzDeliLine.length + 1;
  katzDeliLine.push(name);
    return "Welcome, " + name + ". You are number " + placeInLine + " in line.";
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var line = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
      var placeInLine = i + 1;
      line.push(placeInLine + ". " + katzDeliLine[i]);
    }

    return "The line is currently: " + line.join(", ");
  }
}
