function takeANumber(katzDeliLine, name) {
  return katzDeliLine.indexOf(name) + 1;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    katzDeliLine.shift();
    return katzDeliLine[0];
  }
}

function currentLine(katzDeliLine) {
  var result = 'The line is currently: ';

  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      result += i + 1 + '.: katzDeliLine[i]';
    }
  }

  return result;
}
