//step 1: The function returns a welcome message including the new person's name and position in line
function takeANumber(katzDeliLine, name) { 
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}
//step 2 : The function returns the first person in line and then remove that individual from the line
function nowServing(x) {  
  if (x.length === 0) {  
    return "There is nobody waiting to be served!"
  } else {
    var name = x[0]; 
    x.splice(0, 1);
    return "Currently serving " + name + ".";
  }
}
//Step 3 : The function accepts the current line of people and returns the current line as a string
function currentLine(x) {
    var line = []
    if (x.length === 0) { 
      return "The line is currently empty."
    } else {
      for(var i = 0; i < x.length; i++) { 
        line += (i + 1) + ". " + x[i] + ", "  
      }
     //var line1 = []
     line = line.slice(0, line.length-2) 
      return "The line is currently: " + line 
    }
}
