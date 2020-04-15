function takeANumber(katzDeliLine, newPerson) {
  var newLine = katzDeliLine.push(newPerson);
  return 'Welcome, ' + newPerson + '. You are number ' + (katzDeliLine.length) + ' in line.';

}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return 'There is nobody waiting to be served!'
  }
  
  return "Currently serving " + katzDeliLine.shift() + '.';
}

function currentLine(line) {
  var numberInLine = '';
  
  if (line.length < 1) {
    return "The line is currently empty.";
  }
  
  for (var i = 0; i < line.length; i++) {
    var person = line[i];
    numberInLine += (i + 1) + '. ' + person + ', ';
  }
  
  return "The line is currently: " + numberInLine.slice(0, (numberInLine.length - 2));
}