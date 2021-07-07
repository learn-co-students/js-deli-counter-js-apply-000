function takeANumber(deliLine, name) {
  deliLine.push(name);
  var placeInLine = deliLine.indexOf(name) + 1;
  return "Welcome, " + name + ". You are number " + placeInLine + " in line.";
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }

  var person = deliLine[0];
  deliLine.splice(0, 1);
  return `Currently serving ${person}.`;
}

function currentLine(deliLine) {
  if (deliLine.length === 0) {
    return "The line is currently empty.";
  }

  var names = [];

  for (var i = 0; i < deliLine.length; i++) {
    var name = deliLine[i];
    var idx = i + 1;
    names.push(idx + ". " + name);
  }

  return "The line is currently: " + names.join(', ');
}
