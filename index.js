var katzDeli = []; //line as an array

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  
  //array.length gives nth position starting at 1
  return ("Welcome, " + name + ". You are number " +  
           katzDeliLine.length + " in line.");
} //end of takeANumber()

function nowServing(katzDeliLine){
  if(katzDeliLine.length !== 0){     //if not empty
    var current = katzDeliLine[0];
    katzDeliLine.shift();     //remove leftmost
    return ("Currently serving " + current + ".");
  }
  else{      //if empty line
    return "There is nobody waiting to be served!";
  }
}// end of nowServing()

function currentLine(katzDeliLine){
  var lineAsString = "The line is currently";
  if(katzDeliLine.length !== 0){
    lineAsString += ": ";
    var i;
    for(i = 0; i <katzDeliLine.length - 1; i++){
      lineAsString += parseInt(i + 1) + ". " + katzDeliLine[i] + ", ";
    }
    //for last person in line, different formatting
    lineAsString += katzDeliLine.length + ". " + katzDeliLine[i]
  }
  else{
    lineAsString += " empty.";
  }
  return lineAsString;
}
