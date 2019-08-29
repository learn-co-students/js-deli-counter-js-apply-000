function takeANumber(line, name) {
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
}

function nowServing (line) {
  if (line.length >= 1 ) {
    return "Currently serving " + line.shift() + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine (line) {
  if (line.length >= 1 ) {
    var statement = "The line is currently: ";
    for (var i = 0; i < line.length; i++) {
      var place = i+1; 
      var separator = (place == line.length) ? "" : ", "; // no comma for last place
      statement += place.toString() + ". " + line[i] + separator;
    }
    return statement;
  } else {
    return "The line is currently empty.";
  }
}