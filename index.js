var katzDeli = [];
var katzDeliLine = [];
function takeANumber(deliLine, custName){
 deliLine.push(custName);
  var katzDeliPos = deliLine.indexOf(custName) + 1;
  return "Welcome, " + custName + ". You are number " + katzDeliPos + " in line.";
}

function nowServing (deliLine){
  if (deliLine.length > 0) {
    var serving = deliLine.shift();
    return "Currently serving " + serving + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine (deliLine){
  if (deliLine.length > 0){
    var lineStatement = "The line is currently: ";
    var customer = "";
    for (var i = 0; i < deliLine.length; i++){
      if (i === deliLine.length - 1){
      customer = i + 1 + ". " + deliLine[i];
      } else {
        customer = i + 1 + ". " + deliLine[i] + ", ";
      }
      lineStatement = lineStatement.concat(customer);
    }
    return lineStatement;
  } else {
   return "The line is currently empty."; 
  }
}
