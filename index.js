var katzDeli = [];

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return 'Welcome, ' + newPerson +'. You are number ' + katzDeliLine.length + ' in line.';

}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return 'Currently serving ' + katzDeliLine.shift() + '.';
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  }
  var lineStr = 'The line is currently:';
  for (var i = 0; i < katzDeliLine.length; i++) {
    var person = katzDeliLine[i];
    if (i === katzDeliLine.length -1) {
        lineStr += ' ' + (i + 1) + '. ' + person;
      } else {
        lineStr += ' ' + (i + 1) + '. ' + person + ',';
      }
  }
  return lineStr;
}