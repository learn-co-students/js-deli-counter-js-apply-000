function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var yourNumber = katzDeliLine.length;
  return "Welcome, " + name + ". You are number " + yourNumber + " in line."
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    var nextPerson = katzDeliLine[0]
    katzDeliLine.shift()
    return "Currently serving " + nextPerson + "."
  }
}

function currentLine(katzDeliLine){
  var output = "The line is currently: ";
  
  for (var i = 0; i < katzDeliLine.length; i++){
    var place = i + 1
    if (i != katzDeliLine.length - 1){
      output = output + place + ". " + katzDeliLine[i] + ", "
    } else {
      output = output + place + ". " + katzDeliLine[i]
    }
  }
  
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  } else {
    var len = output.length;
    delete output[len];
    return output
  }
}