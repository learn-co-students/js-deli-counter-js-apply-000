var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return katzDeliLine.length;
  
}

function nowServing(katzDeliLine) {

 if (katzDeliLine.length === 0) {
      return 'There is nobody waiting to be served!';
  } else {
    return katzDeliLine.unshift();
  }    
    
}
  
function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    return 'The line is currently ' katzDeliLine.length + ' . ' + name.
    }
}
  
  
  
  