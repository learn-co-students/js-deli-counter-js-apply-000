
function takeANumber(currentLine, newCustomer) {
  currentLine.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${currentLine.length} in line.`
}


function nowServing(katzDeliLine) {
   if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
  for (let i = 0; i < katzDeliLine.length; i++) {
    let currentCustomer = katzDeliLine[i];
    katzDeliLine.shift();
    return `Currently serving ${currentCustomer}.`;
  }
  }
}

function currentLine(line) {
  let lineArr = [];
  if (line.length === 0) {
    return 'The line is currently empty.'
  }
  else {
    for (let i = 0; i < line.length; i++) {
      lineArr.push(` ${i+1}. ${line[i]}`)
    } 
    let finalLine = `The line is currently:${lineArr}`
    return finalLine;
  }
}
