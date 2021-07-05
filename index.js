var katzDeliLine = [];

function takeANumber(line, person) {
  line.push(person);
  var greeting = null;

  for (var i = 0; i < line.length; i++) {
    greeting = 'Welcome, ' + person + '. ' + 'You are number ' + (i + 1) + ' in line.';
  }

  return greeting;
}

function nowServing(line) {
  var serving = '';

  if (line.length < 1) {
    return 'There is nobody waiting to be served!';
  }

  for (var i = 0; i < line.length - 1; i++) {
    var currentPerson = line.shift();
    var nextPerson = line[i + 1];

    serving = 'Currently serving ' + currentPerson + '.';
  }

  return serving;
}

function currentLine(line) {
  var theLine = [];

  if (line.length < 1) {
    return 'The line is currently empty.';
  }

  for (var i = 0; i < line.length; i++) {
    var lineNumber = i + 1 + '. ' + line[i];

    theLine.push(lineNumber);
  }

  return 'The line is currently: ' + theLine.join (', ');
}
