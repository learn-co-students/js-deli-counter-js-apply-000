function takeANumber(line, name) {
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
}

function nowServing(line) {
  if (line.length < 1) {
    return "There is nobody waiting to be served!";
  }
  
  return "Currently serving " + line.splice(0, 1) + ".";
}

function currentLine(line) {
  var lineArray = [];
  
  if (line.length < 1) {
    return "The line is currently empty.";
  }
  
  for (var i = 0; i < line.length; i++) {
    var person = line[i];
    lineArray.push((i + 1) + ". " + person);
  }
  
  var lineString = lineArray.join(", ");
  return "The line is currently: " + lineString;
}