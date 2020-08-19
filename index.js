function takeANumber(startLine, custName){
  startLine.push(custName);

  var greeting = "Welcome, " + custName + ". You are number " + startLine.length.toString() + " in line.";
  return greeting
}
function nowServing(custArr){
  var noOne = "There is nobody waiting to be served!";
  if (custArr.length >= 1){
    var currentCust = custArr[0];
    custArr.shift();
    return "Currently serving " + currentCust + "."
  }else {
    return noOne
  }
}

function currentLine(crntLine){
  var empty = "The line is currently empty.";
  if(crntLine.length >= 1){
    var start = "The line is currently: ";
    var lineStr = "";
    for(var i =0; i < crntLine.length; i++){
      if(crntLine.length > (i + 1)){
        lineStr += (i + 1).toString() + ". " + crntLine[i] + ", ";
      }else{
        lineStr += (i + 1).toString() + ". " + crntLine[i];
      }
    }
    return start + lineStr
  }else{
    return empty
  }
}
