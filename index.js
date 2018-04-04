var katzDeliLine = [];

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return 'Welcome, ' + newPerson +'. You are number ' + katzDeli.length + ' in line.';
}

function nowServing() {
  if (katzDeli[0] === undefined) {
    return 'There is nobody waiting to be served!';
  } else {
    var first = katzDeli.shift();
    return first;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeli.length === 0) {
    return 'The line is currently empty.';
  }
  var lineStr = 'The line is currently:';
  katzDeli.forEach(function(person, i) {
    lineStr += ' ' + (i + 1) + '. ' + person + ',';
  });
  return lineStr;
}