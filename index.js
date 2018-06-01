
function takeANumber(katzDeliLine, name){
  //first make an if statement to check the array has any names in it, and add to the array if not.
  
  if (katzDeliLine.length === 0){
    katzDeliLine.unshift(name);
    return "Welcome, " + name + "." + " You are number 1 in line." 
  }
  
  //now we make the rest of the function work if the array has one or more names in it
  
  else if(katzDeliLine.length >= 1){
    
    // first, add the name to the back of the array
    
    katzDeliLine.push(name);
    
    //now loop through the array 
    
   for (let i=0; i<katzDeliLine.length; i++){
     
        //define the number in line as i-1 since i is the equal to the index
        
        let numInLine = i+1;
        
        //define the customer/name in its own variable as the loop occurs
        
        let customer = katzDeliLine[i];
        
    //check to see if the index is at the last customer in the array, and if it is, return the message to the customer teling them where they are in line
    
      if (i === katzDeliLine.length-1){
        return `Welcome, ${customer}. You are number ${numInLine} in line.`
      }
      
     //if i is not at the end of the array, continue to the next itteration of the loop 
      else{
        continue;
      }
  }
    
}

}

function nowServing(katzDeliLine){
  let firstInLine = "";
  
  //if no one is in the line, return that sentence 
  
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  
  //otherwise, take the first name out of the array, and use it to return who is being served
  
  else if (katzDeliLine.length >=1){
    firstInLine = katzDeliLine.shift();
  }
  return `Currently serving ${firstInLine}.` ;
}

function currentLine(katzDeliLine){
  // decalre the first portion of the return sentence 
  
  let lineSentence = `The line is currently: `
  
  //if the deli line doesn't have anyone in in it, return that the line is empty
  
  if (katzDeliLine.length ===0){
    return "The line is currently empty."
  }
  
  // otherwise, if anyone is in the line (via loop), return the order of the line 
  
  else if(katzDeliLine.length >=1){
    for (let i=0; i<katzDeliLine.length; i++){
    let lineNum=i+1;
    let customer = katzDeliLine[i];
    
    //if the we're not at the end of the line, add the number and customer name with a "," at the end 
    
    if (i<katzDeliLine.length-1){
      lineSentence += `${lineNum}. ${customer}, `
    }
    
    // if we're at the end of the line, add the number and customer name without a ","
    
  else{
    lineSentence += `${lineNum}. ${customer}`
    }
  }
  return lineSentence;
  }
}
