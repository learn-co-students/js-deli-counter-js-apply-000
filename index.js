function takeANumber(line, name) {
  var placeInLine = line.length + 1;
  line.push(name);
  return 'Welcome, ' + name + '. You are number ' + placeInLine + ' in line.';
}

function nowServing(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  var next = line[0];
  line.shift();
  return 'Currently serving ' + next + '.';
}

function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.'
  }
  var lineMessage = 'The line is currently: ';
  for (var i = 0; i < line.length; i++) {
    lineMessage += (i + 1) + '. ' + line[i];
    if (i < line.length - 1) {
      lineMessage += ', ';
    }
  }
  return lineMessage;
}