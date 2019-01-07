function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);

  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length == 0){
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
    katzDeliLine.shift();
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine == 0){
    return "The line is currently empty."
  } else {
    var rollCall = "The line is currently: "
    for (var i = 0; i < katzDeliLine.length; i++){
      var position = i + 1;
      var name = katzDeliLine[i];
      rollCall += position + ". " + name
      if (katzDeliLine.length - (i + 1) >= 1){
        rollCall += ", ";
      }
    }
    return rollCall;
  }
}
