katzDeli = [];

function takeANumber(line, name) {
  line.push(name);
  var position = line.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(line) {
  if (line.length == 0) {
    return 'There is nobody waiting to be served!';
  } else {
    var toServe = line.shift();
    return `Currently serving ${toServe}.`;
  }
}

function currentLine(line) {
  var newLine = [];
  var len = line.length;

  if (len > 0) {
    for (var i = 0; i < len; i++) {
      var positions = i + 1;
      newLine[i] = `${positions}. ${line[i]}`;
    }
    return `The line is currently: ${newLine.join(', ')}`;
  } else {
    return 'The line is currently empty.';
  }
}
