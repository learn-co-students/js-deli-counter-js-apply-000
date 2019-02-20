
var katzDeliLine = [];

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  var line = katzDeliLine.length;
  
  return("Welcome, " + name +". You are number " + line + " in line.");
  
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length >= 1){
    var first = katzDeliLine[0];
     katzDeliLine.splice(0, 1); 
    return("Currently serving " + first + ".");
  }
  
  else {
    return("There is nobody waiting to be served!");
  }
}

function currentLine(katzDeliLine){

  if(katzDeliLine.length >= 1){
   var first = katzDeliLine[0];
   var second = katzDeliLine[1];
   var third = katzDeliLine[2];
    
    return ("The line is currently: 1. " + first +", 2. " + second + ", 3. "+ third);
  }
  
  else{
    return("The line is currently empty.");
  }
}