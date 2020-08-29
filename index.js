const takeANumber = (katzDeliLine, newCustomer) => {
  katzDeliLine.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`
}

const nowServing = (katzDeliLine) => {
  if(katzDeliLine.length === 0){ 
    return "There is nobody waiting to be served!";
  } else {
    let currentPerson = katzDeliLine.shift();
    return `Currently serving ${currentPerson}.`;
  }
}

const currentLine = (katzDeliLine) => {
  if(katzDeliLine.length === 0){ 
    return "The line is currently empty.";
  } else {
    let lineHas = "The line is currently:"
    for(let i = 0; i <= katzDeliLine.length-1; i++){ 
      lineHas = lineHas + ` ${i+1}. ${katzDeliLine[i]},`
    }
    lineHas = lineHas.substring(0, lineHas.length-1)
    return lineHas
  }
}