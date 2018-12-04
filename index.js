
function takeANumber(line, name){
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line."
}

function nowServing(line) {
  if(!line.length) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + line.shift() + ".";
  }
}

var linesNamesNumbers = [];

function currentLine(line){
  if(!line.length) {
    return "The line is currently empty.";
  }
  for(var i=0; i<line.length; i++) {
    linesNamesNumbers.push(i+1 + ". "+ line[i]);
  }
  return "The line is currently: " + linesNamesNumbers.join(', ');
}



