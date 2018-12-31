
function takeANumber(line, name) {

line.push(name); 

return "Welcome, " + name + ". You are number " + line.length + " in line.";

}    

function nowServing (line) {

  if (line.length === 0) {
    return "There is nobody waiting to be served!"; 
  } else {
    return "Currently serving " + line.shift() + "."; 
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."; 
  } 
  var nameAndPosition = []; 
  for (var i = 0; i < line.length; i++) {
  var numberInLine = (i + 1) + ". ";
  var name = line[i];
   nameAndPosition.push(numberInLine + name);
 }
 return "The line is currently: " + nameAndPosition.join(", ");
} 
