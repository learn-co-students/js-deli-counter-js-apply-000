//Build function takeANumber that attempts two parameters- the current line of people along with the new person's name
//The function should return a welcome message with the new person's place in line

function takeANumber(line,newPerson){
  let totalLine = line.push(newPerson);
  return "Welcome, " + newPerson + "." + " You are number " + totalLine + " in line.";
  
}


//Build function nowServing that accepts the current line of people
//Returns the first person in line and removes the individual from the line
//If there is nobody in line return "There is nobody waiting to be served!"

function nowServing(line){
  if(line.length>0){
    let firstPerson = line.shift();
    return "Currently serving " + firstPerson +".";
  }
  else{
    return "There is nobody waiting to be served!"
  }
}


//Create function currentLine that accepts current line of people and returns current line as a string
//If there is nobody in line return "The line is currently empty."

function currentLine(nowLine){
  let currentLineStr = [];
  let counter = 1
  
  if (nowLine.length == 0){
    return "The line is currently empty."
  }
  else{
    
  for(let i=0;i<=nowLine.length-1;i++){
      let sent = " " + counter + ". " + nowLine[i];
      currentLineStr.push(sent);
      counter++
      
    }
  }
  let firstPart = "The line is currently: 1. " + nowLine[0];
  currentLineStr.shift();
  currentLineStr.unshift(firstPart);
  let currentLineString = currentLineStr.toString();
  return currentLineString;
}















