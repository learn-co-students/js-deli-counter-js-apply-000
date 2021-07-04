function takeANumber(numOfPeople, personName){
  numOfPeople.push(personName);
  var sentence = "Welcome, " + personName + ". You are number " + numOfPeople.length + " in line."
  return sentence;
}

function nowServing(katzDeliLine){
  if(!katzDeliLine.length){
    return "There is nobody waiting to be served!";
  }else {
  return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(line){
  if(!line.length){
    return "The line is currently empty.";
  }
  var newLine =[];
  for (var i = 0; i < line.length; i++){
    newLine.push(i+1 + ". " + line[i]);
  }
  return "The line is currently: " + newLine.join(", ");
}