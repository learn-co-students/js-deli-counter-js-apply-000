function takeANumber(katzDeliLine, string){
  var cust = katzDeliLine
  cust.push(string)
  return "Welcome, " + string +". You are number " + (cust.length) + " in line."
}

function nowServing(deliLine){
  var temp = deliLine.slice(0)
  if(deliLine.length == 0){
    return "There is nobody waiting to be served!"
  }
  else if(deliLine.length > 0) {
    deliLine.splice(0,1)
    return "Currently serving " + temp[0] + "."
  }
}


function  currentLine(line) {
  var temp = []
  if(line.length == 0){
    return "The line is currently empty."
  }
  else{
    for(var i = 0;i < line.length; i++){
       temp.push((i+1)+ ". "+line[i])
    }
    return "The line is currently: " + temp
  }
}
