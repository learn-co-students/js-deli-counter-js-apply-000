var katzDeliLine = [];

function takeANumber(deliLine, person) {
  deliLine.push(person);
  var personNumber = deliLine.length;
  var retString = 'Welcome, ' + person + '. You are number ';
  retString += personNumber;
  retString += ' in line.';
  return retString;
}

function nowServing(line) {
  if(line.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    return 'Currently serving ' + line.shift() + '.';
  }
}

function currentLine(line) {
  if(line.length === 0) {
    return 'The line is currently empty.';
  }
  var myLine = 'The line is currently:';
  for(var i = 0; i < line.length; i++) {
    var lineNum = i + 1;
    myLine += ' ' + lineNum + '. ' + line[i] + ',';
  }
  return myLine.slice(0, myLine.length - 1);
}
