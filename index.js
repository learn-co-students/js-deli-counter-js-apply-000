function takeANumber(katzDeliLine, name) {
  var place = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return 'Welcome, ' + name + '. You are number ' + place + ' in line.';
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  }

  var next = katzDeliLine.shift();
  return 'Currently serving ' + next + '.';
}

function currentLine(katzDeliLine) {
  var people = '';

  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  }

  for (var i = 0; i < katzDeliLine.length; i++) {
    if (people === '') {
      people += '1. ' + katzDeliLine[i];
    } else {
      people += ', ' + (i + 1) + '. ' + katzDeliLine[i];
    }
  }

  return 'The line is currently: ' + people;
}
