let katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return ('Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.')
}

function nowServing(katzDeliLine) {
  let firstPerson = katzDeliLine.shift();
  let serving = (katzDeliLine.length > 0) ? 'Currently serving ' + firstPerson + '.' : "There is nobody waiting to be served!";
  return serving;
}

function currentLine(katzDeliLine) {
  let line = [];

  for (let i = 0; i < katzDeliLine.length; i++) {
    let customer = katzDeliLine[i];
    let linePos = ' ' + (i + 1) + '. ';
    line.push(linePos + customer);
  }

  let currLine = (katzDeliLine.length > 0) ? 'The line is currently:' + line : "The line is currently empty.";
  return currLine;
}
