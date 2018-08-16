function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return ("Currently serving " + katzDeliLine.shift() + ".");
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var string = [];
    for (var i = 0; i < line.length; i++) {
    string.push(i+1 +". " + line[i]);
    }
    return "The line is currently: " + string.join(", ");
  }
}
