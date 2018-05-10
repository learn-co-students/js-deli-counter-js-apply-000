var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return ('Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.');
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
  return ('There is nobody waiting to be served!');
  } else { 
    return 'Currently serving ' + katzDeliLine.shift(name) + '.';
}
}


function currentLine(line){
if(line.length === 0) {
  return 'The line is currently empty.';
}

var nameAndNumber = [];

for (var i = 0; i<line.length; i++) {
  nameAndNumber.push(i+1 + '. ' + line[i]);
}
console.log('The line is currently: ' + nameAndNumber);
return 'The line is currently: ' + nameAndNumber.join(', ');
}
