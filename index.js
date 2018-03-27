var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var positionInLine = katzDeliLine.indexOf(name) + 1;
  var greeting = "Welcome, " + name + ". You are number " +  positionInLine + " in line.";
  return greeting;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    var currentlyServing = katzDeliLine.shift();
    return "Currently serving " + currentlyServing + ".";
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty.";
  } else {
    var i = 0;
    var lineList = [];
    
    for(i = 0; i < katzDeliLine.length; i ++){
      lineList.push(" " + (i+1).toString() + ". " + katzDeliLine[i]);
    }
    return "The line is currently:" + lineList.join(",");
  }
}