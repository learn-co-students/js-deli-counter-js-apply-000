var katzDeliLine = [];
var name;

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
    var returnValue;
    if(katzDeliLine.length < 1){
      returnValue = "There is nobody waiting to be served!"
    }
    else{
      returnValue = `Currently serving ${katzDeliLine[0]}.`;
      katzDeliLine.splice(0,1);
    }
    return returnValue;
}

function currentLine(katzDeliLine){
  var returnValue;
  if(katzDeliLine.length < 1){
    returnValue = "The line is currently empty."
  }
  else{
    var i = 0;
    while(i<katzDeliLine.length){
      returnValue = "The line is currently: " + (i+1) + ". " + katzDeliLine[i];
    }
  }
  return returnValue;
}
