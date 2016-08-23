var katzDeli = [];
function takeANumber(katzDeliLine, newName){
    var position = katzDeliLine.length + 1
    katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${position} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    var nextPerson = katzDeliLine.shift()
    return `Currently serving ${nextPerson}.`
  } else if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
var number = [];
var i = 0;
if (katzDeliLine.length === 0){
  return "The line is currently empty.";
}
for(let i = 1; i < katzDeliLine.length - 1; i++){
  number.push
}





  var number = []
  var i = 0;
  return `The line is currently: ${number}. ${katzDeliLine}`;
} else if (katzDeliLine.length === 0){
  return "The line is currently empty.";
}
}
