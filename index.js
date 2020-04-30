function takeANumber(katzDeliLine, customer) {
  katzDeliLine.push(customer);
  console.log('Welcome, ' + customer + '. You are number ' + katzDeliLine.length + ' in line.');
  return 'Welcome, ' + customer + '. You are number ' + katzDeliLine.length + ' in line.';
}

function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
    return 'There is nobody waiting to be served!'
  } else {
    console.log("Currently serving " + katzDeliLine[0] + '.');
    return 'Currently serving ' + katzDeliLine.shift() + '.';
  }
}

function currentLine(katzDeliLine) {
  if (!katzDeliLine.length) {
    console.log('The line is currently empty.');
    return 'The line is currently empty.'
  } else {
    var queue = []
    for (var i = 0; i < katzDeliLine.length; i++) {
      queue.push(i + 1 + '. ' + katzDeliLine[i]);
    }
    console.log('The line is currently: ' + queue.join(', '));
    return 'The line is currently: ' + queue.join(', ');
  }
}