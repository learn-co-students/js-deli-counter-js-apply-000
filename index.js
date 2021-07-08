
var katzDeliLine = [];

const takeANumber = (katzDeliLine, newCustomerName) => {

katzDeliLine.push(newCustomerName);

let position = katzDeliLine.length;
  
  return `Welcome, ${newCustomerName}. You are number ${position} in line.`;
}



const nowServing = (katzDeliLine) => {
  let firstPerson = katzDeliLine[0];
  
  if(firstPerson === undefined){
    return 'There is nobody waiting to be served!'
  } else {
    katzDeliLine.shift();
    return `Currently serving ${firstPerson}.`;
  }
}

const currentLine = (katzDeliLine) => {
  let lineStatus = 'The line is currently: ';
  
  if(katzDeliLine.length === 0){
    return 'The line is currently empty.';
  }
  
  for(let i = 0; i < katzDeliLine.length; i++){
    let currentElem = katzDeliLine[i];
    
    lineStatus += `${i+1}. ${currentElem}, `
  }
  
  let cleanLineStatus = lineStatus.slice(0,-2);
  
  return cleanLineStatus;
}