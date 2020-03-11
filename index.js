function takeANumber(currentPeople, newName){
  
currentPeople.push(newName)

return "Welcome, " + newName + ". You are number " + currentPeople.length + " in line."

}


function nowServing(katzDeliLine){
   let newValue= ""
  if (katzDeliLine.length===0){
    return  "There is nobody waiting to be served!"
  }
  
  if(katzDeliLine.length>=1){
  newValue= katzDeliLine.shift()

  }
  return `Currently serving ${newValue}.`
}



function currentLine(currentPeople){
  
  let newValue= []
  if(currentPeople.length===0){
    return "The line is currently empty."
  }
  
  else {
    
    for ( let i=0; i<currentPeople.length; i++){
      
      newValue += (i+1) + ". " + currentPeople[i] +", "
    }
   newValue= newValue.slice(0,-2)
    return `The line is currently: ${newValue}`
  }
}
    


 