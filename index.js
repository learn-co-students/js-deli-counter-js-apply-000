var katzDeliLine = [];

function takeANumber(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson);
  
  return "Welcome, " + newPerson + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine){
  var serveStr = "";
  var customerToServe = katzDeliLine.shift();
  
  if(customerToServe === undefined){
    serveStr = "There is nobody waiting to be served!"
  } else {
    serveStr = "Currently serving " + customerToServe + ".";
  }
  
  return serveStr;
} 

function currentLine(katzDeliLine){
  var lineStr = "The line is currently";
    if (katzDeliLine.length === 0){
      return lineStr + " empty."

    } else {
      
      lineStr += ":" ;
      for(var i = 0; i < katzDeliLine.length; i++){
        lineStr += " " + (i+1) +". " + katzDeliLine[i];
        if (i < katzDeliLine.length -1){
          lineStr += ","
        }
      }
      
      return lineStr;
    }
}