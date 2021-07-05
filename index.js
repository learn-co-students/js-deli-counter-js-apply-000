katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  var i = katzDeliLine.length;
  var number = i + 1;
  katzDeliLine.push(name);
    return("Welcome, " + name +". You are number " + number + " in line.");
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    var firstInLine = katzDeliLine.shift();
    return("Currently serving " + firstInLine + ".");
  }
  else{
    return("There is nobody waiting to be served!");
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0){
    var i = 0
    var lineList = [];
      for (var i = 0; i < katzDeliLine.length; i++) {
      lineList.push((i+1) + ". " + katzDeliLine[i]);
  }
    return("The line is currently: " + lineList.join(', '));

  }
  else{
    return("The line is currently empty.");
  }
}
