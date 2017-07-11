
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return 'Welcome, ' + name + '.' + ' You are number ' + katzDeliLine.length + ' in line.';
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  }
    return 'Currently serving ' + katzDeliLine.shift(1) + '.';
}

function currentLine(katzDeliLine) {
  var result = [];
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  }
  for (var i = 0; i < katzDeliLine.length; i++) {
    var names = ' ' + (i + 1) + '.' + ' ' + katzDeliLine[i];
    result.push(names);
  }
  return 'The line is currently:' + result.toString();
}
