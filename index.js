function takeANumber(katzDeliLine, newName){
  katzDeliLine.push(newName);
  var long = katzDeliLine.length;
  return "Welcome, " + newName + ". You are number " + long + " in line.";
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else{
    var serving = katzDeliLine.shift();
    return "Currently serving " + serving + ".";
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }

  var message = "The line is currently: "

  for(var i = 0; i < katzDeliLine.length; i++){
    if(i === (katzDeliLine.length -1)) {
      message += (i+1) + ". " + katzDeliLine[i];
    }
    else{
      message += (i+1) + ". " + katzDeliLine[i] + ", ";
    }
  }
  return message;
}
