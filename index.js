function takeANumber(line, name){
  line.push(name);
  
  console.log("Welcome, " + name + ". You are number " + line.length + " in line.");
  
  return "Welcome, " + name + ". You are number " + line.length + " in line."
}
function nowServing(line) {
  if (line.length === 0){return "There is nobody waiting to be served!"}
  else 
  return (`Currently serving ${line.shift()}.`)
    }



function currentLine(Aline){
  var line = [];
  var text = "The line is currently: ";
  if (Aline.length === 0) {
  return "The line is currently empty."
    }
else {
for (var i = 0; i < Aline.length; i++) {
  line.push(i + 1 + "." + ' ' +  Aline[i] )

}
  
      return text + line.join(', ')
    }
}
    