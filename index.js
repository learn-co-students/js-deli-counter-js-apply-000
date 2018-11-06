var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  
  return 'Welcome, ' + name + '. ' + 'You are number ' + katzDeliLine.length + ' in line.'
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    var firstName = katzDeliLine[0];
    
    katzDeliLine.shift(firstName);
    return 'Currently serving ' + firstName + '.';
  }
}

function currentLine(lineArray) {
  var currentLine = [];
  
  if (lineArray.length === 0) {
    return 'The line is currently empty.';
  } else {
    for (var i = 0; i < lineArray.length; i++) {
      var name = lineArray[i];
      var length = i + 1;
      
      currentLine.push(' ' + length + '. ' + name)
    }
    return 'The line is currently:' + currentLine;
  }
}