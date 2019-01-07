var katzDeliLine = [];
function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  var num = katzDeliLine.length;
  return "Welcome, " + name + ". You are number " + num + " in line.";
}
function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0) return "There is nobody waiting to be served!";
  return "Currently serving " + katzDeliLine.shift() + ".";
}
function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0) return "The line is currently empty.";
  var output = "The line is currently: ";
  for(var i = 0; i < katzDeliLine.length; i++){
    var position = i + 1;
    output += position + ". " + katzDeliLine[i] + ", ";
  }
  return output.slice(0,-2);
}
