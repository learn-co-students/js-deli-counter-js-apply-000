var katzDeliLine = [];

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return "Welcome, " + newPerson + ". You are number " + (katzDeliLine.length) + " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
      var person = katzDeliLine.shift();
      return 'Currently serving ' + person + '.';
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  } else {
    var str = 'The line is currently:';
    katzDeliLine.forEach(function(person, i) {
      str += ' ' + (i + 1) + '. ' + person + ',';
    });
  }
  return str.slice(0, str.length - 1);
}