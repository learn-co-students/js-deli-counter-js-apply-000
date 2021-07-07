var katzDeli = [];
var otherDeli=[];

function takeANumber (katzDeli, name){
  
  var lineNum = katzDeli.length + 1
  katzDeli.push(name)
    return "Welcome, " + name +". You are number "+ lineNum  + " in line."  
  
}


function nowServing(otherDeli, deliLine){
  if (! otherDeli.length){
  return "There is nobody waiting to be served!"
  }
  else { return "Currently serving " + otherDeli.shift() + "."
    
  }
}
const peopleInLine = ["Bill","Jane","Ann"];

 function currentLine (peopleInLine){
   if (! peopleInLine.length){
     return 'The line is currently empty.'
   }
   var nameAndNumba = [];
   for(var i=0; i < peopleInLine.length; i++) {
    nameAndNumba.push (i+1 + ". "+ peopleInLine[i]);
   }
    return "The line is currently: " + nameAndNumba.join(', ')
 }
   