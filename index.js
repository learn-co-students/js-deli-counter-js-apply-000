var katzDeli = [];
var katzDeliLine = [];
function takeANumber(katzDeliLine, custName){
  katzDeliLine.push(custName);
  var katzDeliPos = katzDeliLine.indexOf(custName) + 1;
  return "Welcome, " + custName + ". You are number " + katzDeliPos + " in line.";
}

function nowServing (katzDeliLine){
  if (katzDeliLine.length > 0) {
    var serving = katzDeliLine.shift();
    return "Currently serving " + serving + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine (katzDeliLine){
  if (katzDeliLine.length > 0){
    var lineStatement = "The line is currently: ";
    var customer = "";
    for (var i = 0; i < katzDeliLine.length; i++){
      if (i === katzDeliLine.length - 1){
      customer = i + 1 + ". " + katzDeliLine[i];
      } else {
        customer = i + 1 + ". " + katzDeliLine[i] + ", ";
      }
      lineStatement = lineStatement.concat(customer);
    }
    return lineStatement;
  } else {
   return "The line is currently empty."; 
  }
}
