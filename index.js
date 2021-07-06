function takeANumber(currentLine, name){
  
  currentLine.push(name)
  
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}

function nowServing(katzDeliLine){
  let newValue= ""
  if(katzDeliLine.length===0){
    return "There is nobody waiting to be served!"
  }
  if ( katzDeliLine.length>=1){
    newValue= katzDeliLine.shift()
  }
  return `Currently serving ${newValue}.`
}

function currentLine(currentLine){
  let newString= ""
  
  if( currentLine.length===0){
    
    return "The line is currently empty."
    
  } 
  
 else {
   
   for ( let i =0; i< currentLine.length; i++){
     
     newString += i+1 + ". " + currentLine[i] + ", "
    
   }
   newString= newString.slice(0,-2)
   return `The line is currently: ${newString}`
 }
}