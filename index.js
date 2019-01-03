
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var num = katzDeliLine.length;
  return 'Welcome, ' + name + '.' + ' You are number ' + num + ' in line.'
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  }

    return ('Currently serving ' + katzDeliLine.shift() + '.');
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  }

  var newStr = ''
  for (var i = 0; i < katzDeliLine.length; i++) {
    var person = katzDeliLine[i];
    if (i === 0) {
    newStr += 'The line is currently: ' + [i + 1] + '. ' + person;
  } else {
    newStr += ', ' + [i + 1] + '. ' + person;
  }
  }
  return newStr;
}