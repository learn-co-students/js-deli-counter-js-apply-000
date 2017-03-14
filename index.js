//function for new customer enterting the deli to take a number
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + (katzDeliLine.indexOf(name) + 1) + " in line.";
}
//function for now serving
function nowServing(katzDeliLine) {
  if(katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}
//function to list current line
function currentLine(katzDeliLine) {
  if(katzDeliLine == 0){
    return "The line is currently empty.";
  }
  else {
    var lineString= "";
    for(var i = 0; i < katzDeliLine.length; i++){
      lineString += (i + 1) + ". "  + katzDeliLine[i] + ", ";
    }
    var correctLine = lineString.split(",");
    correctLine.pop();
  }
  return "The line is currently: " + correctLine;

}
