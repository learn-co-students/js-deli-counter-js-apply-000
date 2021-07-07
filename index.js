var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var positionIndex = katzDeliLine.indexOf(name);
  var position = positionIndex + 1;
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`;
  } else {
  var firstPerson = katzDeliLine[0];
  katzDeliLine.shift();
  return `Currently serving ${firstPerson}.`;
    }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  }
  var str = 'The line is currently: ';
  for (var i = 0; i < katzDeliLine.length - 1; i++) {
    var name = katzDeliLine[i];
    str += `${i + 1}. ${name}, `
  }
  str += `${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length - 1]}`

  return str;
}
