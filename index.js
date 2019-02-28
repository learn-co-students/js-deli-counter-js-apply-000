var katzDeliLine = [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return ("Welcome, " + name + ". " + "You are number " + katzDeliLine.length + " in line.");
}
  
function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
  return "There is nobody waiting to be served!";
  } else {
    var name = katzDeliLine[0];
    katzDeliLine.splice(0, 1);
    return"Currently serving " + name + ".";
  }
}

var line = []; 
function currentLine(katzDeliLineLine){
  if(katzDeliLineLine.length === 0){
    return "The line is currently empty.";
  } else {
  for (var i = 0; i<katzDeliLineLine.length; i++){
    line.push(" "+ [i + 1] + ". " + katzDeliLineLine[i]);
  }
    return "The line is currently:" + line;
}
}