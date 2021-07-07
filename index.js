//takeANumber function indexes customer names
function takeANumber(line, name) {

    line.push(name);
  
  return "Welcome, " + name + ". You are number " + (line.length) + " in line."
}

//nowServing function returns the person being currently served and then removed them from the line
function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var name = line[0];
    line.splice(0, 1); 
    return "Currently serving " + name + ".";
  }
}

//currentLine function 
function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  var newLine = [];
  for (let i = 0; i < line.length; i++) {
    newLine.push(i+1 + ". " + line[i]);
    
  }
  return "The line is currently: " + newLine.join(", ");
}

