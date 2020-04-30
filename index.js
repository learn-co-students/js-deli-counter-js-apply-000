function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  
  return `Currently serving ${katzDeliLine.splice(0, 1)}.`;
}

function currentLine(katzDeliLine) {
 let newA = [];
 
 if (katzDeliLine.length === 0) {
   return "The line is currently empty.";
 }
 
 for (let i = 0; i < katzDeliLine.length; i++) {
   let person = katzDeliLine[i];
   newA.push(" " + (i + 1) + ". " + person);
 }
  
  return `The line is currently:${newA}`;
}
