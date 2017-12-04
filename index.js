function takeANumber(katzDeliLine,newName) {
  katzDeliLine.push(newName);
  var number = katzDeliLine.length;

  return "Welcome, " + newName + ". You are number " + number + " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }

  var customer = katzDeliLine[0];
  katzDeliLine.shift();

  return "Currently serving " + customer + ".";
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }

  var line = 'The line is currently: ';

  for (var i = 0; i < katzDeliLine.length; i++) {
    var customer = katzDeliLine[i];
    var place = i+1

    if ( i === katzDeliLine.length - 1) {
      line += place + '. ' + customer;
    } else {
      line += place + '. ' + customer + ', ';
    }
  }

  return line;
}
