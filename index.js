

function takeANumber(currentLine, personsName) {
  currentLine.push(personsName);
  var str = "Welcome " + personsName + ". You are number " + currentLine.length +  " in line." ;
  return str;
}

function nowServing(currentLine) {
  if (currentLine.length === 0)
  // Checks if currentLine is empty (no elements in array)
    return "There is nobody waiting to be served";
  else 
  {
    var name = currentLine[0];
    currentLine.shift();
    return name;
  }
}

function currentLine(currentLine) {
  if (currentLine.length === 0)
    return "The line is currently empty";
  else {
    var str = "The line is currently: ";
    for (var i = 0; i < currentLine.length ; i++)
    {
      str = str + (i+1) + ". " + currentLine[i];
      if (i < currentLine.length - 1)
        str = str + ", ";
    }
    return str;
  }
}



function takeANumber(currentLine, personsName) {
  currentLine.push(personsName);
  var str = "Welcome, " + personsName + ". You are number " + currentLine.length +  " in line." ;
  return str;
}

function nowServing(currentLine) {
  if (currentLine.length === 0)
    return "There is nobody waiting to be served!";
  else 
  {
    var name = currentLine[0];
    currentLine.shift();
    return 'Currently serving ' + name + '.';
  }
}

function currentLine(currentLine) {
  if (currentLine.length === 0)
    return "The line is currently empty.";
  else {
    var str = "The line is currently: ";
    for (var i = 0; i < currentLine.length ; i++)
    {
      str = str + (i+1) + ". " + currentLine[i];
      if (i < currentLine.length - 1)
        str = str + ", ";
    }
    return str;
  }
}

var katzDeliLine = [];
 