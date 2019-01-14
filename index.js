//Deli Counter Lab

function takeANumber(deliLine, newPerson){
  //adding name to the list and returning position
  
  return `Welcome, ${newPerson}. You are number ${deliLine.push(newPerson)} in line.`
}

function nowServing (deliLine){
  //removes person being served from front
  
  if (deliLine.length > 0){
    return `Currently serving ${deliLine.splice(0,1)}.`
    
  }else{
    return 'There is nobody waiting to be served!'
  }
  
}

function currentLine (deliLine){
  //returns current headcount with assigned places in line
  
  if(deliLine.length > 0){
    
    var currentLine = 'The line is currently:'
    var i = 0
    
    do{
      currentLine = currentLine + ` ${(i + 1)}. ${deliLine[i]},`
      i++
    }while(i < deliLine.length)
    
    return currentLine.substring(0, currentLine.length - 1)
  
  }else{
    
    return 'The line is currently empty.'
  }
  
}