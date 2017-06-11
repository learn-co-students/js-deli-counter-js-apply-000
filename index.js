var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);

  var placeInLine = katzDeliLine.length;

  return 'Welcome, ' + name + '. You are number ' + placeInLine + ' in line.';
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    return 'Currently serving ' + katzDeliLine.shift() + '.';
  }
}

function currentLine(katzDeliLine) {
  var message = 'The line is currently';

  if (katzDeliLine.length === 0) {
    message += ' empty.';
  } else {
    message += ': ';

    for (let i = 0; i < katzDeliLine.length; i++) {
      message += (i + 1).toString() + '. ' + katzDeliLine[i] + ', '
    }

    message = message.slice(0, -2);
  }

  return message;
}
