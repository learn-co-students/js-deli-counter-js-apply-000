var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return 'Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.';
}


function nowServing(katzDeliLine) {
  var removeFirst = katzDeliLine.shift();
  if (katzDeliLine.length > 0) {
    return 'Currently serving ' + removeFirst + '.';
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(katzDeliLine) {
  var currentLine = [];
  if (katzDeliLine.length > 0) {
    for (var i = 0; i < katzDeliLine.length; i++) {
      currentLine.push(' ' + [i + 1] + '. ' + katzDeliLine[i]);
    }
    return 'The line is currently:' + currentLine;
  }
  return 'The line is currently empty.';
}
