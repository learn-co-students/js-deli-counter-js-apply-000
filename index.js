var katzDeliLine = [];

function takeANumber(katzDeliline, newname) {
  katzDeliline.push(newname);

  var position = katzDeliline.indexOf(newname) + 1;

  return "Welcome, " + newname + ". You are number " + position + " in line.";
}

function nowServing(katzDeliline) {
  if (katzDeliline[0] === undefined) {
    return "There is nobody waiting to be served!";
  }
  else {
    var first = katzDeliline.shift();
  }
  return "Currently serving " + first + "."
}

function currentLine(katzDeliline) {
  if (katzDeliline[0] === undefined) {
    return "The line is currently empty."
  }
  else {
    var line = ""
    for (var i = 0; i < katzDeliline.length - 1; i++) {
      line = line + (i + 1) + ". " + katzDeliline[i] + ", "
    }
    line = "The line is currently: " + line + katzDeliline.length + ". " + katzDeliline[katzDeliline.length - 1]
    return line;
  }
}
