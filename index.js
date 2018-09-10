function takeANumber(line, name){
  
  line.push(name);
  
  return `Welcome, ${name}. You are number ${line.length} in line.`;
  
}

function nowServing(line){
  
  if (line.length === 0){
   
    return "There is nobody waiting to be served!";
  }
  
  else{
    
    let firstInLine = line[0];
    line.splice(0,1);
    
    return `Currently serving ${firstInLine}.`;
  }
  
}

function currentLine(line){
  if (line.length === 0){
    
    return "The line is currently empty."
  }
  
  else {
    
    let returnString = "The line is currently:";
    
    for (let i = 0; i<line.length; i++){
      
      returnString += ` ${i+1}. ${line[i]}`;
      
      if (i< line.length -1){
        returnString += `,`;
      }
      
    }
    
    return returnString;
    
  }
}