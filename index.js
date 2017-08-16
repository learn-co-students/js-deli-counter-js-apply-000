var katzDeliLine=[];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name +". You are number " + katzDeliLine.length + " in line."
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length===0){
    return "The line is currently empty.";
  } else {
    var theCurrent = "The line is currently: 1. " + katzDeliLine[0];
    for(let i=1; i< katzDeliLine.length; i++){
      theCurrent+= ', '+ (i+1)+ ". " + katzDeliLine[i];
    }
    return theCurrent;
  }
}


function nowServing(katzDeliLine){
  var serving = '';
  if(katzDeliLine.length===0){
    return "There is nobody waiting to be served!";
  } else {
    serving = "Currently serving " + katzDeliLine[0]+'.';
    katzDeliLine.shift();
  }
  return serving;
}
