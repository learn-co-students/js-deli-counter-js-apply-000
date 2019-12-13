function takeANumber(line, name){
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
  var next = katzDeliLine[0];
  katzDeliLine.shift();
  return "Currently serving " + next + ".";
  }
  else{
    return "There is nobody waiting to be served!";
  }
}
function currentLine(katzDeliLine){
  var nameList = "";
  for(var i=0; i < katzDeliLine.length; i++){
    var position = i + 1;
    nameList = nameList + position + ". " + katzDeliLine[i];
    if (i < katzDeliLine.length - 1){
      nameList = nameList + ", ";
    }
  }
  if (katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
  else {
    return "The line is currently: " + nameList;
  }
}