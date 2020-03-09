
function takeANumber(katzDeliLine, namePerson){
    katzDeliLine.push(namePerson);
    for (let i = katzDeliLine.length + 1; i > 0; i++) {
      return `Welcome, ${namePerson}. You are number ${i - 1} in line.`;
    }
}


function currentLine(line) {
   if (line.length === 0) {
    return `The line is currently empty.`;
  } 
  else {
   return `The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`;
    
  }
}



