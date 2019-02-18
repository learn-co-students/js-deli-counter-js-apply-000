
var katzDeliLine = [];

const takeANumber = (katzDeliLine, newCustomerName) => {
let position = katzDeliLine.length+1;

katzDeliLine.push(newCustomerName);
  
  
  return `Welcome, ${newCustomerName}. You are number ${position} in line.`;
}

// this is checking a variable that I do not understand how to store. It shouldn't have to store anything because you're submitting the current line each time. the way it is working, it is updating a global variable, but when I try to write it like it is updating katzDeliLine, it doesn't work. 


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