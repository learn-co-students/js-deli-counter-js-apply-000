function takeANumber(line, name) {
  var i = 0;
  var string = "test";

  line[line.length] = name;

  return "Welcome, " + name + ". You are number " + line.length + " in line.";
}

function nowServing(line) {
  if (line.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
    var name = line[0];
    line.shift();
    return "Currently serving " + name + ".";
  }
}

function currentLine(line) {
  var string = "The line is currently: ";
  if (line.length == 0) {
    return "The line is currently empty.";
  } else {
    var i;
    for (i = 0; i < line.length-1; i++) {
      string += i+1 + ". " + line[i] + ", ";
    }

    string += line.length + ". " + line[line.length-1];
  }
  return string;
}
