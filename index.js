function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}
function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0)
  return "There is nobody waiting to be served!"
  else return "Currently serving " + katzDeliLine.shift() + ".";
}
function currentLine(katzDeliLine){
  var i;
  var line = "The line is currently: "
  if (katzDeliLine.length === 0){
    line = "The line is currently empty."
  }
  for (i = 0; i < katzDeliLine.length; i++) {
    if (i === katzDeliLine.length - 1){
      line += i+1 + ". " + katzDeliLine[i];
    }
    else {
      line += i+1 + ". " + katzDeliLine[i] + ", ";
    }
}
  return line
}
