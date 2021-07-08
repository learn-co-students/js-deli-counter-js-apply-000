var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return 'Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.';
}

function nowServing(katzDeliLine) {
  return (katzDeliLine.length) ?
    'Currently serving ' + katzDeliLine.shift() + '.' : 'There is nobody waiting to be served!';
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length == 0) {
    return 'The line is currently empty.'
  }
  var out = 'The line is currently: ';
  katzDeliLine.forEach((data, i) => {
    out+=((i == katzDeliLine.length-1) ?
      (i+1) + '. ' + data : (i+1) + '. ' + data + ', ');
  });
  return out;
}
