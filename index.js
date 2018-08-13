
var customerName = "";
var deliLine = ['Steven', 'Blake', 'Avi'];

function takeANumber(deliLine, customerName){
  deliLine.push(customerName);
  return "Welcome, " + customerName + ". You are number " + deliLine.length + " in line." ;
}

function nowServing (deliLine){
  if (deliLine.length ===  0){
    return "There is nobody waiting to be served!"
  }
  else{
   
  return "Currently serving " + deliLine.shift() + ".";
  }
  
}

function currentLine(deliLine){
  if (deliLine.length === 0){
    return "The line is currently empty.";
  }
  else{
  var i= 0;
  var lineStatus = [];
 for (i = 0; i < deliLine.length; i++) { 
lineStatus.push(  (i+1) + ". "  + deliLine[i]  );

}
return "The line is currently: " + lineStatus.join(', ');
}
}

