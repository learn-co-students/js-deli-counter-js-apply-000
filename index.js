var katzDeliLine = [];
function takeANumber(katzDeliLine,name){
  var emptySpot = katzDeliLine.length;
  var realPlace = emptySpot + 1;
  katzDeliLine[emptySpot] = name;
  var greetings = "Welcome, " + name + ". You are number " + realPlace + " in line."
  return greetings;
}

function nowServing(katzDeliLine){
  var nextUp;
  if (katzDeliLine.length===0){
    nextUp = "There is nobody waiting to be served!";
    return nextUp;
  }
  else{
    nextUp = "Currently serving " + katzDeliLine[0] + ".";
    katzDeliLine.shift();
    return nextUp;
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length==0){
    return "The line is currently empty.";
  }
  else{
    var listLine = "The line is currently: "
    for (var i =0; i < katzDeliLine.length; i++){
      var plusOne = i + 1;
      if (i==0){
        listLine = listLine + plusOne + ". " + katzDeliLine[i];
      }
      else{
        listLine = listLine + ", " + plusOne + ". " + katzDeliLine[i];
      }
    }
    return listLine;
  }
}
