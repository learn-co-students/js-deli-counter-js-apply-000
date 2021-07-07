var katzDeli = [];

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    return 'Welcome, ' + name + '. You are number ' + (katzDeliLine.length) + ' in line.';
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length !== 0) {
    var firstPerson = katzDeliLine.shift();
    return 'Currently serving ' + firstPerson + ".";
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine (katzDeliLine) {
  var message = 'The line is currently: ';
  var i = 0;
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  }
  for (i=0; i<katzDeliLine.length; i++) {
      message += (i+1) + '. ' + katzDeliLine[i] + ', ';
  }
  return message.slice(0, message.length-2);

}
