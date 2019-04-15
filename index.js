function takeANumber(katzDeliLine, name){
  var lineLength = katzDeliLine.push(name);
  console.log(katzDeliLine)
  return "Welcome, " + name + ". You are number " + (katzDeliLine.length) + " in line.";
}



function nowServing(katzDeliLine){
  var person = katzDeliLine.shift()
  console.log(person)
  if (person ==undefined){
    return "There is nobody waiting to be served!"
  }
  else{return "Currently serving " + person + "."}
}

function currentLine (katzDeliLine){
  if (katzDeliLine.length==0){
    return "The line is currently empty."
  }
  var sentence = "The line is currently: "
  for (var i=0; i<katzDeliLine.length; i++)
    sentence += (i+1) + ". " + katzDeliLine[i] + ", "
    //go back and look at what Matthew said about interpolation
    return sentence.substring(0,sentence.length-2)
}
