function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return "Welcome, " + name +". You are number "+ katzDeliLine.length+ " in line."
}


function nowServing(katzDeliLine){
  if (katzDeliLine.length===0) {

    return "There is nobody waiting to be served!"
    
  }
  
  var temp=katzDeliLine[0]
  katzDeliLine.shift(0)
  return "Currently serving " + temp+"."

  
}

function currentLine(katzDeliLine){

  if (katzDeliLine.length===0) {
    return "The line is currently empty."
    
  }
  var current_line=""
  for (var i = 0; i < katzDeliLine.length; i++) {
    if (i===katzDeliLine.length-1){
      current_line+= (i+1).toString()+". " + katzDeliLine[i]
    }else{current_line+= (i+1).toString()+". " + katzDeliLine[i]+", "}
    
  }
  return "The line is currently: " + current_line

  
}