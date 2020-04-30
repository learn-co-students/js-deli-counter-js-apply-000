var katzDeliLine = [];
var newDeliLine = [];

function takeANumber(katzDeliLine, newDeliLine){
  var i = 0;
  katzDeliLine.push(newDeliLine);
  for(i = 0; i < katzDeliLine.length; i++){
    katzDeliLine.push(`Welcome ${newDeliLine}. You are number ${[i+1]} in line.`);
  }
    return katzDeliLine;
}

//var katzDeliLine = [...katzDeliLine, ${newName}]
//katzDeliLine.push(newName)

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return ("There is nobody waiting to be served!");
  }
  else (katzDeliLine.length >= 1);{
    console.log(`Currently serving ${katzDeliLine[0]}`);
  }
  katzDeliLine = katzDeliLine.slice(1);
}
//katzDeliLine = katzDeliLine.slice(1)
//

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return ("The line is currently empty.");
  }
  else (katzDeliLine >= 1);
    console.log(`The line is currently: ${katzDeliLine}`);
}
//need to figure out how to assign numerical values to the indexes of katzDeliLine