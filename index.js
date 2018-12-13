function takeANumber(theDeliLine, name){
var lineNum= theDeliLine.length+1;
theDeliLine.push(name);
return ("Welcome, " + name + ". You are number " + lineNum + " in line.");
}

function nowServing(serving){
if (serving.length === 0){
  return "There is nobody waiting to be served!";
} else{
  var serve= serving.shift();
return ("Currently serving " + serve + ".");
}
}

function currentLine(deliLine){
if (deliLine.length === 0){
  return "The line is currently empty.";
}

var position = `The line is currently: 1. ${deliLine[0]}`;
for (var i =1; i<deliLine.length;i++){
  position +=`, ${i+1}. ${deliLine[i]}`;
}
return position;
}