function takeANumber (currentLine, newCustomer) {
  currentLine.push(newCustomer);
  const newLength = currentLine.length;
  return `Welcome, ${newCustomer}. You are number ${newLength} in line.`
  
}

function nowServing(katzDeliLine) {
  
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  
  const firstPerson = katzDeliLine[0];
  katzDeliLine.shift();
  return `Currently serving ${firstPerson}.`;
  
}

function currentLine(lineArray) {
  
  if (lineArray.length === 0) {
    
    return `The line is currently empty.`;
  }
  
  let finalString = "The line is currently:";
  
  for (let i = 0; i < lineArray.length; i++) {
    const currentName = lineArray[i];
    const number = i + 1;
    
   if (i === lineArray.length - 1) {
     
     finalString+= ` ${number}. ${currentName}`
     
   } else {
     finalString+= ` ${number}. ${currentName},`
   }
   
   
  }
  
  return finalString;
  
}











