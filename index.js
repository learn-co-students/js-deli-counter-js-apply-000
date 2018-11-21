function takeANumber(line, name) {
  line.push(name);
  return "Welcome, " + name + ". You are number " + (line.length) + " in line.";
} 


function nowServing(line) {
  if (line.length > 0) {
    var person = line.shift(1);
    return 'Currently serving ' + person + '.';
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var lineString = "";
    for (var i = 0; i < line.length; i++) {
      lineString = lineString + (i + 1) + ". " + line[i] + ", ";
    }
    lineString = lineString.slice(0, -2);
    return "The line is currently: " + lineString;
  } else {
    return "The line is currently empty."
  }
}