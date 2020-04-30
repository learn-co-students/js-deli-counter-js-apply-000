// tell the customer their place in line
function takeANumber(line, name) {
  var spot = line.length + 1 
  
  line[spot-1] = name
  var phrase = "Welcome, " + name + ". You are number " + spot + " in line."
  
  return phrase
}

//returns next person in line and takes them out of the line
function nowServing(line) {
  
  var len = line.length
  if(len < 1) {
     return "There is nobody waiting to be served!"
  }
  
  var person = line.shift()
  
  return "Currently serving " + person + "."
  
}


function currentLine(line) {
  var len = line.length
  
  if(len < 1 ) {
    return "The line is currently empty."
  }
  var desc = "The line is currently:"
  
  var i
  for(i=0; i<len-1; i++) {
    desc = desc + " " + (i+1) + ". " + line[i] + ","
    
  }
  desc = desc + " " + (i+1) + ". " + line[i]
  
  return desc
}