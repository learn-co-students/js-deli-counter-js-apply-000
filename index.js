var katzDeli = [];

function takeANumber(line, name) {
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
}

function nowServing(line) {
  var first = line.shift();
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  return "Currently serving " + first + ".";
}

function currentLine(line) {
  var current = [];
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  for (var i = 0; i < line.length; i++) {
    current.push(i + 1 + ". " + line[i]);
  }
  return "The line is currently: " + current.join(', ');
}