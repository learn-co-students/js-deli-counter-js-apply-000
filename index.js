let katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return ('Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.')
}

function nowServing(katzDeliLine) {
  let firstPerson = katzDeliLine.shift();

  if (katzDeliLine.length > 0) {
    return 'Currently serving ' + firstPerson + '.';
  }
  return "There is nobody waiting to be served!";
}

function currentLine(katzDeliLine) {
  let line = [];

  for (let i = 0; i < katzDeliLine.length; i++) {
    let customer = katzDeliLine[i];
    let linePos = ' ' + (i + 1) + '. ';
    line.push(linePos + customer);
  }

  if (katzDeliLine.length > 0) {
    let message = 'The line is currently:' + line;
    return message;
  }
  return "The line is currently empty.";
}
