
var line = [];

function takeANumber(line, name){
  line.push(name);
   console.log("Welcome, " + name + ". You are number " + line.length + " in line.");
  return ("Welcome, " + name + ". You are number " + line.length + " in line.")
}
function nowServing(line) {
  if(!line.length) {
     console.log("There is nobody waiting to be served!")
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + line.shift()+".";
  }
}
function currentLine(line){
  if(!line.length) {
    return "The line is currently empty.";
  }
  var lineNames = [];
  
  for(var i=0; i<line.length; i++) {
    lineNames.push(i+1 + ". "+ line[i]);
  }
  console.log("The line is currently: " + lineNames)
  return "The line is currently: " + lineNames.join(', ');
}