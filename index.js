function takeANumber(katzDeliLine, newPersonName) {
  katzDeliLine.push(newPersonName);
  return 'Welcome, ' + newPersonName + '. You are number ' + katzDeliLine.length + ' in line.';
}


function nowServing(deliLine) {
  
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  var serving = deliLine[0];
  deliLine.shift(serving);
  return 'Currently serving ' + serving + '.';
}

  
function currentLine(line) {
  var str = "The line is currently: ";
  
  if (line.length === 0) {
    return 'The line is currently empty.';
  }
  
  for (var i = 0; i < line.length; i++) {
    var person = line[i];
    
    if (i === line.length -1) {
      str += (i + 1) + '. ' + person;  
    } else {
      str += (i + 1) + '. ' + person + ', '; 
    }
  }
  
  return str;
}
