function takeANumber(line, name) {
  //add the name to the line
  line.push(name);
  
  var num = line.length;
  
  //welcome and return number in line
  return "Welcome, " + name + ". You are number " + num + " in line.";
  
}

function nowServing(line) {
  // check for people in line
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } 
  //return currently served, remove patron from line with shift
  return "Currently serving " + line.shift() +".";
}

function currentLine(line) {
  
  //check for people in line
  if (line.length === 0) {
    return "The line is currently empty.";
  } 
  
  //convert line to a string
  var out = "The line is currently:";
  for (var i = 1; i <= line.length ; i++) {
    out += ((i == 1) ? " " : ", " ) + i + ". " + line[i-1]; 
  }
  
  
  //return expected output
  return out;
}