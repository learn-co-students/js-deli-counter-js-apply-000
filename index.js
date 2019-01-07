function takeANumber(katzDeliLine, newPerson){
  
  katzDeliLine.push(newPerson)
  
  let place = katzDeliLine.length
  
  return "Welcome, "+ newPerson +". You are number " + (place) +" in line."
}

function nowServing(deliLine){
  
  let lineLength = deliLine.length
  
  if(lineLength===0){
    return "There is nobody waiting to be served!"
  }
  
  else {
    let served = deliLine.shift()
    return "Currently serving " + served + "."
  }
}

function currentLine(katzDeliLine){
  
  let linePosition = katzDeliLine.length
  
  if (linePosition===0){
    return "The line is currently empty."
  }
  
  let announcements = []
  
  for(let i=0; i<linePosition; i++){
   
    announcements.push( (i+1) + ". " + katzDeliLine[i])
   
    }
    
    return "The line is currently: " + announcements.join(", ") 
}