function takeANumber(line, newPerson) {
  var newNumber = line.length + 1;
  line.push(newPerson);
  
  return `Welcome, ${newPerson}. You are number ${newNumber} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var first = line[0];
    line.shift();
    
    return `Currently serving ${first}.`;
  }
}

function currentLine(line) {
  var message = "The line is currently: ";
  
  for (var i = 0; i < line.length; i++) {
    var person = line[i];
    
    if (i + 1 === line.length) {
      message += `${i + 1}. ${person}`; // '1. Ada'
    } else {
      message += `${i + 1}. ${person}, `; // '2. Grace, '
    }
  }
  
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    return message;
  }
}