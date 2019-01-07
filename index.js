var katzDeliLine = [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + (katzDeliLine.indexOf(name)+1) + " in line.";
}

function nowServing(katzDeliLine){
  if (typeof katzDeliLine[0] === 'undefined'){
    return "There is nobody waiting to be served!";
  }
  var name = katzDeliLine[0];
  katzDeliLine.splice(0,1);
  return "Currently serving " + name + ".";
}

function currentLine(katzDeliLine){
  if (typeof katzDeliLine[0] === 'undefined'){
    return "The line is currently empty.";
  }
  var line = [];

  for ( var i = 0; i < katzDeliLine.length; i ++){
    line.push( " " + (i+1) + ". " + katzDeliLine[i] + "")
  }
  return "The line is currently:" + line;
}
