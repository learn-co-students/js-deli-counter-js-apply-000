let katzDeliLine = [];

function takeANumber(katzDeliLine, newCustomer) {
  katzDeliLine.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    let servingCustomer = katzDeliLine[0];
    katzDeliLine.splice(0, 1);
    return `Currently serving ${servingCustomer}.`;
  }
  
}


function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  } else {
    let msg = 'The line is currently: ';
    
    for(let i=0; i<katzDeliLine.length; i++) {
        msg += `${i + 1}. ${katzDeliLine[i]}, `;
    }
    
    return msg.slice(0, -2);
  }
}


