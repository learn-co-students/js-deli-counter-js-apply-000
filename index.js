var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine, customerName){
  katzDeli = katzDeliLine;//not necessary but katzDeli array was not being used...
  katzDeliLine.push(customerName);
  var customerPos =  katzDeliLine.indexOf(customerName);
  var calcPos = Number(customerPos) + Number(1);

return "Welcome, " + customerName + "." + " You are number " + calcPos + " in line.";

}

function nowServing(katzDeliLine){
  var checkLength = katzDeliLine.length
  if (Number(checkLength) === Number(0)) {
    return "There is nobody waiting to be served!"
  } else {
  return "Currently serving " + katzDeliLine.shift() +".";
  }
}

function currentLine(line){
  var checkLength = line.length
  if (Number(checkLength) === Number(0)) {
    return "The line is currently empty."
  } else {
      for(var linePos=0; linePos < checkLength; linePos++){
      line[linePos] = linePos + 1 + ". " +  line[linePos];//trouble with formatting
      }
      return "The line is currently: " + line;
      // return "The line is currently: "  + katzDeliLine; 
     
}
}