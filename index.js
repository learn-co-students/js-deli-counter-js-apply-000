// beginning of day empty line

var katzDeli = [];

function takeANumber(line, name) {
  line.push(name);
  return ("Welcome, " + name + ". You are number " + line.length +" in line.");
}

function nowServing(line) {
  if (line.length > 0) {
    var name = line.shift();
    return "Currently serving " + name + ".";
  } else return "There is nobody waiting to be served!";
}

function currentLine(line) {
  var linestring = "The line is currently: ";
  
  if (line.length > 0) {
    for (var l = 0; l < line.length; l++){
      linestring = linestring + (l+1) + ". " + line[l];
      
      if (l < line.length-1 ) { linestring = linestring + ", " }
    }
    return linestring;
    
  } else return "The line is currently empty.";

  
  
}
