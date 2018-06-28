
var lineNumber = [];

function takeANumber(lineNumber, name){
  lineNumber.push(`${name}`);
    
  return ("Welcome, "+ `${name}.`+ " You are number "+ lineNumber.length + " in line.")
}

function nowServing(firstInLine) {
  let i = 0;
  while (i < firstInLine.length) {
    i++;
  }
  if (firstInLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else{
  return (`Currently serving ${firstInLine.shift()}.`);
    
  }
  
}

var line = [];

function currentLine(deliLine){
  let sum = 0;
  while (sum < deliLine.length) {
    line.push(` `+[sum+1]+`. `  + deliLine[sum])
    sum++;
 }
  if (deliLine.length === 0) {
    return "The line is currently empty.";
  } else
 return(`The line is currently:` + line);
  
}

