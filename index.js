var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  for(var i = 0; i < katzDeliLine.length; i++){
    var numInLine = i + 1;
  }
  return "Welcome, " + name +". You are number " + numInLine + " in line."
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    var newStr = "Currently serving " + katzDeliLine[0] + ".";
    katzDeliLine.splice(0, 1)
  } else {
    newStr = "There is nobody waiting to be served!"
  }
  return newStr
}

function currentLine(katzDeliLine){
  var fullStr = "The line is currently: "
  if(katzDeliLine.length > 0){
    for(var i = 0; i < katzDeliLine.length; i++){
      var str = (i + 1) + ". " + katzDeliLine[i];
      if (i !== (katzDeliLine.length - 1)) {
        str += ", "
      }
      fullStr += str
    }
  } else {
    return "The line is currently empty."
  }
  return fullStr
}
