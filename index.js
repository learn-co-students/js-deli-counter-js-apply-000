var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var linePosition = katzDeliLine.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${linePosition} in line.`
}

function nowServing(katzDeliLine) {
  var next = katzDeliLine.splice(0, 1);

  if (katzDeliLine.length <= 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${next}.`;
  }
}

function currentLine(katzDeliLine) {
  var statement = "The line is currently: ";
  var spots = [];

  for (var i = 0; i < katzDeliLine.length; i++) {
    var person = katzDeliLine[i];
    var spot = String(i + 1) + '. ' + person;
    spots.push(spot);
  }

  if (katzDeliLine.length <= 0) {
    return "The line is currently empty."
  } else {
    return statement + spots.join(', ');
  }
}
