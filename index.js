function takeANumber(currentLineOfPeople,newPersonsName) {
  currentLineOfPeople.push(newPersonsName)
  
  return `Welcome, ${newPersonsName}. You are number ${currentLineOfPeople.length} in line.`;
}

function nowServing(currentLineOfPeople) {
  if (currentLineOfPeople.length === 0) {
   return  "There is nobody waiting to be served!"
  }
  
  
  return `Currently serving ${currentLineOfPeople.shift()}.`
}

function currentLine(currentLineOfPeople) {
 let listPhrase = 'The line is currently:';
 
 if (currentLineOfPeople.length === 0) {
   return "The line is currently empty."
 }
 
 for (let i = 0; i < currentLineOfPeople.length; i += 1) {
   listPhrase = `${listPhrase} ${i + 1}. ${currentLineOfPeople[i]}${i === currentLineOfPeople.length - 1 ? '' : ','}`
 }
 
return listPhrase
}