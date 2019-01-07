var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return 'Welcome, ' + name + '.' + ' You are number ' + katzDeliLine.length +
  ' in line.'
}

function nowServing(katzDeliLine) {
  var str = '';
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
  str += 'Currently serving ' + katzDeliLine[0] + '.'
  katzDeliLine.splice(0, 1)
  }
  return str;
}

function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.'
  }
  var str = [];
  for (var i = 0; i < line.length; i++) {
    var person = line[i];
    str.push((i + 1) + '. ' + person);
  }
  return 'The line is currently: ' + str.join(', ');
}
