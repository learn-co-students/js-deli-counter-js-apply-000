function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + (katzDeliLine.length) + " in line.";
}

function nowServing(katzDeliLine){
  var announcement = katzDeliLine[0]
  katzDeliLine.shift();
  //console.log(katzDeliLine)
  if (announcement == undefined){
    return "There is nobody waiting to be served!"
  }
  else {return "Currently serving " + announcement + "."
  }
}

function currentLine (katzDeliLine){
  if (katzDeliLine.length==0){
    return "The line is currently empty."
  }
  var sentence = "The line is currently: "
  // for(executed once before running code; condition; executed every loop)
  for (var i=0; i<katzDeliLine.length; i++)
    sentence += (i+1) + ". " + katzDeliLine[i] + ", "
    //substring(start index, end index) -->keep elements in this range
    return sentence.substring(0,sentence.length-2)
}
