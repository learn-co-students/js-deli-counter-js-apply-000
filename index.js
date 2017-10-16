var katzDeliLine = [];

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return 'Welcome, ' + newPerson + '. You are number ' + [parseInt(katzDeliLine.indexOf(newPerson))+1] + ' in line.';
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    return 'Currently serving ' + katzDeliLine.shift() +'.';
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  } else {
    var line = '';
    for (var i = 0; i < katzDeliLine.length; i++) {
      line = line + ' ' + [i+1] + '. ' + katzDeliLine[i] + ',';
    }
    return 'The line is currently:' + line.slice(0, line.length - 1);
  }
}
