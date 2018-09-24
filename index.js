function takeANumber(katzDeliLine, customerName){
  var customerOrder = katzDeliLine.length + 1;
  katzDeliLine.push(customerName);
  return `Welcome, ${customerName}. You are number ${customerOrder} in line.`
  
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return `There is nobody waiting to be served!`
  }
  
  else {
    name = katzDeliLine.shift();
    return `Currently serving ${name}.`
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return `The line is currently empty.`
  }
  else{
    
    var deliStr = `The line is currently: 1. ${katzDeliLine[0]}`
    
    for(let i = 1; i < katzDeliLine.length; i++){
      deliStr += `, ${i+1}. ${katzDeliLine[i]}`
    }
    
    return deliStr
  }
}
  