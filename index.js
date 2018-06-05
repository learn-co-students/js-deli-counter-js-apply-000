var katzDeliLine = [];

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  let position = katzDeliLine.length;
  return `Welcome, ${newName}. You are number ${position} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`;
  }
  
  let firstPerson = katzDeliLine[0];
  katzDeliLine.shift();
  return `Currently serving ${firstPerson}.`
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `The line is currently empty.`;
  }
  
  let currentLineStr = `The line is currently: `;
  
  for (let i = 0; i < katzDeliLine.length; i++) {
    let currentCustomer = katzDeliLine[i];
    let positionCustomer = i + 1;
    currentLineStr += `${positionCustomer}. ${currentCustomer}, `;
  }
  
  return currentLineStr.slice(0, -2);
}