 //purpose: add new person to the end of the currentline 
function takeANumber (currentLine, newName){
  currentLine.push (newName); 
   return ("Welcome, " + newName + ". You are number " + currentLine.length + " in line.");
}
 /*currentLine is an array, we need to add the newName to the existing array 
 deli line = currentline + the new person, 
 the new person's position in line is the index of their position in the array +1, if we add them to the currentline, or length 
 */


//purpose: accept the current line of people and return the first person in line, then remove that individual from the line 
function nowServing (line){
  if (line.length === 0){
    return ("There is nobody waiting to be served!")
  }
  else 
    return (`Currently serving ${line.shift()}.`);
}


//purpose: accept current line of people and returns it as string 
function currentLine(line){
  var numberedLine = [];
  for (let i = 0; i < line.length; i++){
   numberedLine.push( ` ${i + 1}. ${line[i]}`);
  }
  if (line.length===0) {
    return "The line is currently empty.";
  }
  else
    return ("The line is currently:" + numberedLine);
}
  /* created a for loop, so i represents the index of the parameter
    therefore, when we add 1 to it, the index looks more like what a person would expect as the number in line. 
    From there, we could create a new array that includes the position in line before each name is inserted; the for loop stops when we get to the end of the line 
  */