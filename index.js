function takeANumber(line, name) {
  line.push(name);
  return 'Welcome, ' + name + '. You are number ' + line.length + ' in line.';
}

function nowServing(line) {
  if (line.length > 0) {
    return 'Currently serving ' + line.shift() + '.';
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var message = 'The line is currently: ';
    for (var i = 0; i < line.length - 1; i++) {
      message = message + (i + 1) + '. ' + line[i] + ', ';
    }
    return message + (i + 1) + '. ' + line[i];
  } else {
    return 'The line is currently empty.';
  }
}