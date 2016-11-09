function takeANumber(line, name) {
  line.push(name);

  return "Welcome, " + name + "." + " You are number " + (line.indexOf(name) + 1) + " in line.";
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var first = line[0];
    line.shift(first);
    return "Currently serving " + first + ".";
  }
}

function currentLine(line) {
  var lineString = "The line is currently:";

  if (line.length === 0) {
    return "The line is currently empty.";
  }

  for (var i = 0; i < line.length; i++) {
    lineString += " " + (i + 1) + ". " + line[i];

    if (i !== line.length - 1) {
      lineString += ",";
    }
  }

  return lineString;
}
