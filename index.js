function takeANumber(line,newPerson) {
  line.push(newPerson);
  let num = line.length;
  return "Welcome, "+ newPerson +". You are number " + num + " in line."
}

function nowServing(line) {
  let person = line[0];
  
  if (person === undefined) {
    return "There is nobody waiting to be served!"
  } else {
    line.shift();
    return "Currently serving " + person + ".";
  }
}
  
   
 
function currentLine(line) {
    if (line[0] === undefined) {
      return "The line is currently empty."
    } 
    
    let result = "The line is currently: 1. " + line[0];
    for (var i = 1; i < line.length; i++) {
    let name = line[i];
    let num = i+1;
    result += (", " + num + ". " + name);
  }
  
  return result;
}