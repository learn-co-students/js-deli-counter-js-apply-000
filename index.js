
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var lineNumber = katzDeliLine.indexOf(name) + 1;
  
  return `Welcome, ${name}. You are number ${lineNumber} in line.`;
  
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } 
    var customer = katzDeliLine.shift();
    return `Currently serving ${customer}.`;
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
   
   var whoInLine = []
  for(let i = 0; i < katzDeliLine.length; i++) {
    whoInLine.push(`${i + 1}. ${katzDeliLine[i]}`)
  }
  
  return `The line is currently: ${whoInLine.join(", ")}`;
  
}

