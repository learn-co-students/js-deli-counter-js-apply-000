//var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var tempLineNum = katzDeliLine.indexOf(name, 0) + 1;
  return "Welcome, " + name + ". You are number " + tempLineNum + " in line.";
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length >= 1){
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
  
  return "There is nobody waiting to be served!";
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length >= 1){
    var tempString = "The line is currently: ";
    var i = 0;
    var j = 1;
    var k = katzDeliLine.length; //will be used to test for last or only item
    
    while (i < katzDeliLine.length){
      if(k === 1){
        tempString = tempString + j + ". " + katzDeliLine[i];
      }
      else {
        tempString = tempString + j + ". " + katzDeliLine[i] + ", ";
      }
      i++;
      j++;
      k--;
    }
    return tempString;
  }
  else {
    return "The line is currently empty.";
  }
}
