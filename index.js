var katzDeli = [];

var count = 0;

function takeANumber(katzDeliLine){
  count += 1;
  KatzDeli.push(count);lear
  return 'Welcome. Youre ticket number' + count;
}

// takeANumber(katzDeliLine) => 'Welcome. You're ticket number 1' [1]
// takeANumber(katzDeliLine) => 'Welcome. You're ticket number 2' [1, 2]

// nowServing(katzDeliLine) => 'Currently serving 1' [2]
// takeANumber(katzDeliLine) => 'Welcome. You're ticket number 3' [2,3]

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