function takeANumber(curLine,name) {
  curLine.push(name);
  return "Welcome, " + name +". You are number " + (curLine.indexOf(name) + 1) + " in line."
}

function nowServing(curLine) {
  if (curLine.length > 0) {
    return "Currently serving " + curLine.shift() + "."
  }
  else if (curLine.length >= 0) {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(curLine) {
  var finalString = 'The line is currently: '
  
  if (curLine.length <= 0) {
    return "The line is currently empty."
  }
  
  else if (curLine.length > 0) {
  
    for (var i = 0; i < curLine.length; i++) {
      var curName = curLine[i];
      if (i === curLine.length - 1) {
        finalString = finalString + (i+1) + ". " + curName 
      }
      else if (i !== curLine.length -1) {
        finalString = finalString + (i+1) + ". " + curName + ", "
      }
    }
    return finalString;
  }  
  
}