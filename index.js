var katzDeliLine = [];

function takeANumber(katzDeliLine, customer) {
  katzDeliLine.push(customer);
    return `Welcome, ${customer}. You are number ${(katzDeliLine.indexOf(customer)) + 1} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length < 1) {
    //dont need to worry about negative numbers
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine) {
  var line = '';
  if (katzDeliLine.length < 1) {
    //edge case - nobody in line
    return 'The line is currently empty.';
  }
  for(var i = 0; i < katzDeliLine.length; i++) {
    if(i < katzDeliLine.length - 1) {
      line += `${i + 1}. ${katzDeliLine[i]}, `;
    } else {
      line += `${i + 1}. ${katzDeliLine[i]}`;
    }
  } 
  return `The line is currently: ${line}`;
}




