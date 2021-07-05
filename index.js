// var katzDeliLine = []; passed from test script

// function 1
var line = [];
var lineNumber = [];

function takeANumber(line, customerName){
  line.push(customerName);
  return `Welcome, ${customerName}. You are number ${line.length} in line.`;
}
// function 2

function nowServing (katzDeliLine){
  
   if (katzDeliLine.length > 0){
     return `Currently serving ${katzDeliLine.shift()}.`;
   }else {
    return "There is nobody waiting to be served!";
   }
}

//  function 3

function currentLine(line){
  var lineArray = [];

  for(var i = 0; i < line.length; i++) {
        lineArray.push(` ${i + 1}. ${line[i]}`)
  }
  if (line.length > 0){
    return `The line is currently:${lineArray}`;
  }else {
      return "The line is currently empty.";
   }
}
