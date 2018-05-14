var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return 'Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.';
}

function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
  return 'There is nobody waiting to be served!';
  } else { 
    return 'Currently serving ' + katzDeliLine.shift(name) + '.';
}
}

function currentLine(line){
if (!line.length) {
  return 'The line is currently empty.';
}

var nameAndNumber = [];

for (var i = 0; i<line.length; i++) {
  nameAndNumber.push(i+1 + '. ' + line[i]);
}

return 'The line is currently: ' + nameAndNumber.join(', ');
}
