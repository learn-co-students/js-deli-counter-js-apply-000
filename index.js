var katzDeliLine = [];

function takeANumber(currentLine, name){
  var placeInLine = currentLine.length + 1;
  var str = "Welcome, " + name + ". You are number " + placeInLine + " in line.";
  currentLine.push(name);
  return str;
}

// 2. Build a function `nowServing`. This function should accept the current line of people (`katzDeliLine`)
// and return the first person in line and then remove that individual from the line. If there is nobody in
// line, it should return "There is nobody waiting to be served!"

function nowServing(currentLine){
  if (currentLine.length == 0){
    return "There is nobody waiting to be served!";
  } else {
    var current = currentLine[0];
    currentLine.splice(0, 1);
    return "Currently serving " + current + ".";
  }
}

// 3. Build a function `currentLine` that accepts the current line of people and returns the current line as
// a string; for example, if 'katzDeliLine' is currently `["Ada", "Grace"]`, `currentLine(katzDeliLine)`
// would return `"The line is currently: 1. Ada, 2. Grace"`.  You don't have to use `katzDeliLine` as a variable
// or parameter name in your function though, it's just an example of a variable that might be passed to it.
// If there is nobody in line, it should return `"The line is currently empty."`

function currentLine(currentLine){
  if (currentLine.length == 0){
    return "The line is currently empty.";
  }
  else {
    var str = "The line is currently: ";
    for (var i = 0; i < currentLine.length; i++){
      str += (i+1) + ". " + currentLine[i];
      if (currentLine[i+1] != null){
        str += ", ";
      }
    }
    return str;
  }


}
