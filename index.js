function takeANumber(line, name) {
  line.push(name);
  return 'Welcome, ' + name + '. You are number ' + (line.indexOf(name) + 1) + ' in line.';
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    var first = katzDeliLine.shift();
    return ('Currently serving ' + first + '.');
  }
}

function currentLine(line) {
  var arr = [];

  for (var i = 0; i < line.length; i++) {
    var person = line[i];
    arr.push((i + 1) + '. ' + person);
  }
    if (line.length === 0) {
      return 'The line is currently empty.';
    } else {
      return 'The line is currently: ' + arr.join(', ');
  }
}
var katzDeliLine = [];