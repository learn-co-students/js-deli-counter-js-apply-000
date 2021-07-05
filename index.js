function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  for (var i = 0; i < katzDeliLine.length; i++) {
    var person = katzDeliLine[i];
    var position = i + 1;
    var greeting = 'Welcome, ' + person + '.'
    + ' You are number ' + position + ' in line.';
  }
  return greeting;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine[0] === undefined) {
    return 'There is nobody waiting to be served!'
  } else {
    var personServed = katzDeliLine.splice(0, 1);
    return 'Currently serving ' + personServed + '.';
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine[0] === undefined) {
    return 'The line is currently empty.'
  } else {
    var arr = [];
    var str = 'The line is currently: '
    for (var i = 0; i < katzDeliLine.length; i++) {
    var person = katzDeliLine[i];
    var position = i + 1;
    var onLine = position + '. ' + person;
    if (person !== katzDeliLine[katzDeliLine.length - 1]) {
      arr.push(onLine + ',');
    } else {
      arr.push(onLine);
    }
   }
   return str += arr.join(' ');
  }
}
