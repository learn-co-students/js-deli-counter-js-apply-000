function takeANumber(curLine, newPerson){
  curLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${curLine.length} in line.`;
}

function nowServing(curLine){
  if(curLine.length === 0) return "There is nobody waiting to be served!";
  //let nextPerson = curLine.shift();
  return `Currently serving ${curLine.shift()}.`; 
}

function currentLine(curLine){
  if(curLine.length === 0) return "The line is currently empty."; 
  let newString = "The line is currently:";
  for(let i = 0; i < curLine.length; i++){
    if(i === curLine.length - 1){
      newString += ` ${i + 1}. ${curLine[i]}`;
    } else {
      newString += ` ${i + 1}. ${curLine[i]},`;
    }
    
  }
  return newString;
}