var katzDeliLine = [];

function takeANumber(katzDeliLine, string) {
  katzDeliLine.push(string);
  
 return "Welcome, " + string + ". You are number " + katzDeliLine.length + " in line.";
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  var number = 1;
  var line = "The line is currently: ";
  
  while(number <= katzDeliLine.length) {
    line += number +". " + katzDeliLine[number - 1];
    if(number !== katzDeliLine.length) {
      line += ", ";
    }
    number++;
    
  }
  return line;
  
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  var firstInLine = katzDeliLine[0];
  katzDeliLine.shift();
  return "Currently serving " + firstInLine + ".";
  
}

takeANumber(katzDeliLine, "Ada");
takeANumber(katzDeliLine, "Grace");
takeANumber(katzDeliLine, "Kent");
currentLine(katzDeliLine);
nowServing(katzDeliLine);
currentLine(katzDeliLine);
takeANumber(katzDeliLine, "Matz");
currentLine(katzDeliLine);
nowServing(katzDeliLine);
currentLine(katzDeliLine);





