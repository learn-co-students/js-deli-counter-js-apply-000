var katzDeli = [];

function takeANumber(katzDeliLine, personName){
  var lineInd = katzDeliLine.findIndex(function(elem){
    return elem === personName;
  });
  if(lineInd === -1){
    var lineNum = katzDeliLine.push(personName);
    return "Welcome, "+personName+". You are number "+lineNum.toString()+" in line.";
  } else {
    return lineInd++; 
  }
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0) { 
    return "Currently serving "+katzDeliLine.shift()+"."; 
  }
  
  return "There is nobody waiting to be served!";
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length <= 0) {return "The line is currently empty.";}
  
  var retStr = "The line is currently:";
  katzDeliLine.forEach(function(elem,ind){
    retStr += ' '+(ind+1).toString()+'. '+elem+',';
  });
  retStr = retStr.slice(0,-1);
  return retStr;
}