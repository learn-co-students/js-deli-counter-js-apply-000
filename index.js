function takeANumber(deliLine, name) {
  deliLine.push(name)
  return "Welcome, " + name + ". You are number " + parseInt(deliLine.indexOf(name)+1) + " in line."
}

function nowServing(deliLine) {
  if(deliLine.length>0){
    return "Currently serving " + deliLine.shift() + "."
    
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(deliLine) {
  var lineStr = "The line is currently: "
  
  if(deliLine.length > 0) {
    
  for(var i = 0; i <= deliLine.length-1; i++) {
  lineStr += "" + (i+1) + ". " + deliLine[i] 
 if (i !== deliLine.length-1) {
   lineStr += ", "
 }
  }
  return lineStr
  } else {
    return "The line is currently empty."
  }
}