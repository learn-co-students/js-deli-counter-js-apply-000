function takeANumber(line, name) {
  var realLength = line.length + 1;
  line.push(name);
  return "Welcome, " + name + ". You are number " + realLength + " in line.";
}

function nowServing(line) {
  if (line.length < 1) {
    return "There is nobody waiting to be served!";
  }
  var first = line.shift();
  return `Currently serving ${first}.`;
}

function currentLine(line) {
  if (line.length < 1) {
    return "The line is currently empty."
  }
  
  var intro = "The line is currently:";
  
  for (var i = 0; i < line.length; i++) {
    intro += " " + (i+1) + ". " + line[i]; // i+1 gives "real world" position in line
    if (i < line.length - 1) {
      intro += ",";
    }
  }
  
  return intro;
}