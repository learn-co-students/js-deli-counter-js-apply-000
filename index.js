function takeANumber(katzDeli, newPerson){ 
 katzDeli.push(newPerson);
 return "Welcome, " + newPerson + ". You are number " + (katzDeli.length) + " in line."
}

function nowServing(line){
  
  
  if(line.length === 0){
    return "There is nobody waiting to be served!"
  }
  else {
    
    var customer = line[0]
    line = line.shift()
    return ("Currently serving " + customer + '.')
    

   
    
  }
  
}

function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty." 
  }
  else {
    var result = 'The line is currently: '
    for(let i=0;i<line.length;i++){
      if (i !== line.length - 1){
      result += (i+1) + '. ' + line[i] + ', '
      }
      else{
        result += (i+1) + '. ' + line[i] 
      }
    }
  }
  return result
}
    