//purpose: add new person to the end of the currentline 
function  takeANumber(currentLine, newName){
  currentLine.push(newName);
  return `Welcome, ${newName}. You are number ${currentLine.length} in line.`
}

/*purpose: accept the current line of people
 *return the first person in line, 
 *then remove that individual from the line */
function nowServing (currentLine){
  if (currentLine.length === 0){ // could also write "if (!currentLine.length)"
       return "There is nobody waiting to be served!";
  }
    return `Currently serving ${currentLine.shift()}.`;
}

//purpose: accept current line of people and returns it as string
function currentLine (line){
  if (line.length===0){
    return "The line is currently empty." ;
  }
  var newLine = []; 
  for (let i = 0; i< line.length; i++){
    newLine.push(` ${(i+1)}. ${line[i]}`);
  }
  return `The line is currently:${newLine}`
}