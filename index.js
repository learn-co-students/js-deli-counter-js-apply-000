function takeANumber(katzDeliLine, customer) {
  katzDeliLine.push(customer);

  return 'Welcome, ' + customer + '. You are number ' + katzDeliLine.length + ' in line.';
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length !== 0) {
    return 'Currently serving ' + katzDeliLine.shift() + '.';
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(katzDeliLine) {
  var message = 'The line is currently: ';

  if (katzDeliLine.length !== 0) {

    for (var i = 0; i < katzDeliLine.length; i++) {
      var position = i + 1;

      if (i !== katzDeliLine.length - 1) {
        message += position + '. ' + katzDeliLine[i] + ', ';
      } else {
        message += position + '. ' + katzDeliLine[i];
      }
    }
  } else {
    return 'The line is currently empty.'
  }

  return message;
}
