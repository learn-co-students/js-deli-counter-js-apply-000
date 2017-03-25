var katzDeli = []
var katzDeliLine = []

function takeANumber(katzDeliLine, name){
  return ("Welcome, " + name + ". You are number " + (katzDeliLine.push(name))+ " in line.");
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
  return "There is nobody waiting to be served!"
  }
  else{
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(katzDeliLine){
  var n=0
  var listString = []
  if (katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
  else{
    katzDeliLine.forEach(function(){
      listString.push(" " + (n+1) + ". " + katzDeliLine[n]); n++;
    })
    return "The line is currently:" + listString;
  }
}
