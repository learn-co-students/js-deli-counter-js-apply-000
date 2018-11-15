var johnsDeliLine = [];

function takeANumber (johnsDeliLine, newPersonName) {   johnsDeliLine.push(newPersonName);
  
  if (johnsDeliLine.length === 0) {
    return "Welcome, " + newPersonName + "." + " You are number 1 in line.";
  }

  for (var i = 0; i < johnsDeliLine.length; i += 1) {
    var person = johnsDeliLine[i];
    var number = johnsDeliLine.length;

    
    return "Welcome, " + newPersonName + "." + " You are number " + number + " in line.";
  }

  return johnsDeliLine;
}


function nowServing (line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + line.shift() + ".";  
  }
}


function currentLine (line) {
  var numName = [];
  
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  
  for (var i = 0; i < line.length; i += 1) {
    var person = line[i];
    
    numName.push(i+1 + ". " + person);
  }
  
  var joinedNames = numName.join(', ');
  return "The line is currently: " + joinedNames;
}


