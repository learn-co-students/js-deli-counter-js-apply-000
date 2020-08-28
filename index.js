
function takeANumber(katzDeliLine, name) {
  var spot = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + spot + " in line."
}

function nowServing(katzDeliLine) {
  
  
if(katzDeliLine.length === 0){
  return "There is nobody waiting to be served!"
}else {
  return 'Currently serving ' + katzDeliLine.shift() + '.'
}
}



function currentLine(katzDeliLine) {
  let numberInLine = [];
  
  if(katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  
  for(var i = 0; i < katzDeliLine.length; i ++){
    numberInLine.push(`${i+1}. ${katzDeliLine[i]}`)
  }
  
  numberInLine = numberInLine.join(', ')
  
  return 'The line is currently: ' + numberInLine
}