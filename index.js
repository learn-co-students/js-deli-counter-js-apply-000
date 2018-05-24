var katzDeliLine = [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length +" in line.";
}
takeANumber(katzDeliLine,"Ada");



function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  else {
    var client = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + client + "."; 
  }
}
nowServing(katzDeliLine);


function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
  else {
  var line = "";
  var i = 0;
  do {
  line += (i+1) + ". " + katzDeliLine[i] + ", ";
  i++;
  }
while (i < katzDeliLine.length);
return "The line is currently: " + line.slice(0,-2);
}
}
currentLine(katzDeliLine);

