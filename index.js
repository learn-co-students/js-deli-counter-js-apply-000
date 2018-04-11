function takeANumber(katzDeliLine , customer){
  katzDeliLine.push(customer)
  return "Welcome, "+ customer +". You are number "+ katzDeliLine.length +" in line."
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  var current = katzDeliLine.splice(0,1)
  return "Currently serving " + current + "."
}

function currentLine(katzDeli){
  var line = []
  if(katzDeli.length === 0){
    return "The line is currently empty."
  }
  for(var i = 0 ; i < katzDeli.length ; i++){
    line.push(` `+[i+1]+`. `  + katzDeli[i])
  }
  return(`The line is currently:` + line);
}
