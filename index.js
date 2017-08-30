function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var place = katzDeliLine.length
  return "Welcome, " + name +". You are number "+ place + " in line."
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0 ){
    return "There is nobody waiting to be served!"
  }

  var name = katzDeliLine[0]
  katzDeliLine.shift()
  return "Currently serving " + name + "."
}

function currentLine(katzDeliLine){

  if(katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  var output = "The line is currently:"
  for(var i = 0; i<katzDeliLine.length;i++){
    var prepend = " "
    if(i>0) prepend = ", "
    output += prepend + (i+1) + ". " + katzDeliLine[i]
  }
  return output
}
