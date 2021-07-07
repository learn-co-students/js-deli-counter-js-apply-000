var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var position = katzDeliLine.length;
  return 'Welcome, ' + name + '. You are number ' + position + ' in line.'
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!'
  }
  return 'Currently serving ' + katzDeliLine.shift() +'.'
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return 'The line is currently empty.';
  }
  var lineList = 'The line is currently: 1. ' + katzDeliLine[0];
  for (var i = 1; i < katzDeliLine.length; i++){
    lineList = lineList + ', ' + (i+1) + '. ' + katzDeliLine[i];
  }
  return lineList
}
