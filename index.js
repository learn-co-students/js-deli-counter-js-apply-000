

function takeANumber(line, name){
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length +
  " in line."
}

function nowServing(line){
  if (line.length < 1){
    return "There is nobody waiting to be served!";
  }
  else {
    return "Currently serving " + line.shift() + ".";
  }
}

function currentLine(line){
  var finalLine = [];
  if (line.length < 1){
    return "The line is currently empty.";
  }
  else {
    for (var i=0; i < line.length; i++){
      finalLine += (i+1) + ". " + line[i] + ", ";
    }
    finalLine = finalLine.slice(0, finalLine.length-2)
  }
  return "The line is currently: " + finalLine;
}
