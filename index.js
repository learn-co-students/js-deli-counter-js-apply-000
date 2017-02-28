var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var position = katzDeliLine.length;
  return 'Welcome, ' + name + '. You are number ' + position + ' in line.';
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    return 'Currently serving ' + katzDeliLine.shift() + '.';
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var lineMessage = 'The line is currently:';
    for (var i = 0; i < katzDeliLine.length; i++) {
      lineMessage = lineMessage + ' ' + (i+1) + '. ' + katzDeliLine[i];
      if(i + 1 !== katzDeliLine.length) {
        lineMessage +=',';
      }
    }
    return lineMessage;
  }
}