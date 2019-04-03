
function takeANumber(currentLinePpl, newPerson) {
  currentLinePpl.push(newPerson); 
  return 'Welcome, ' + newPerson + '.' + ' You are number ' + currentLinePpl.length + ' in line.';
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    return 'Currently serving ' + katzDeliLine.shift() + '.';
  }
}

function currentLine(currentLinePpl) {
  if (currentLinePpl.length < 1) {
  return 'The line is currently empty.';
  } 
  var currentlyInLine = [];
  //need to loop through the currentLinePpl to grab their names individually.
  for (var i = 0; i < currentLinePpl.length; i++) {  
    currentlyInLine.push(i + 1 + '. ' + currentLinePpl[i]);
  }
  return 'The line is currently: ' + currentlyInLine.join(', ');
}