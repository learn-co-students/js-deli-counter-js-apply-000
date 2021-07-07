function takeANumber(currentppl, newperson){

  currentppl.push(newperson)
  var msg = `Welcome, ${newperson}. You are number ${currentppl.length} in line.`
  return msg
}

function nowServing(currentppl){
  if (currentppl.length == 0){
    return "There is nobody waiting to be served!"
  }else{
    return "Currently serving " + currentppl.shift() + "."
  }
}


function currentLine(currentLine){
  var msg = "The line is currently:"
  if (currentLine.length == 0){
    return "The line is currently empty."
  }else{
  var line = ""
  for (var i = 0; i<currentLine.length; i++){
    line = line + ` ${i+1}. ${currentLine[i]},`
  }
  return msg + line.slice(0,-1)
}
}
