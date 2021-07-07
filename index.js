
function takeANumber(line, name) {
  line.push(name)
  return "Welcome, " + name + ". You are number " +  line.length + " in line."
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + line.shift(0) + ".";
  }
}
function currentLine(line) {
  var lineDisplay = "";
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < line.length; i++) {
      lineDisplay += (i + 1) + ". " + line[i] + ", "
    }
    lineDisplay = lineDisplay.slice(0, lineDisplay.length - 2);
    return "The line is currently: " + lineDisplay;
}
}
