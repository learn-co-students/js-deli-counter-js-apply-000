var katzDeliLine = [];

function takeANumber(ar, name) {
  ar.push(name);
  var str = "Welcome, " + name + ". You are number " + (ar.indexOf(name) + 1) + " in line.";
  return str;
}

function nowServing(ar) {
  if (ar.length === 0) {
    return "There is nobody waiting to be served!";
  }

  var person = ar.shift();
  return "Currently serving " + person + ".";
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  }

  var str = "The line is currently:";

  for (var i = 0; i < line.length; i++) {
    var idx = i + 1;
    if (i < line.length - 1) {
      str += " " + idx + ". " + line[i] + ",";
    } else {
      str += " " + idx + ". " + line[i];
    }
  }

  return str;
}
