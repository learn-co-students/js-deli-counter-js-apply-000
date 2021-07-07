// Add elements to an array
// Return items from an array
// Iterate through an array
// Pass an array as a function parameter

var katzDeli = [];

function takeANumber (lineOfCustomers, newCustomer) {
  //add new customer to the lineOfCustomers
  lineOfCustomers.push (newCustomer);
  return `Welcome, ${newCustomer}. You are number ${lineOfCustomers.indexOf(newCustomer)+1} in line.`;
}

function nowServing (line) {
  return (line.length >= 1)
    ? `Currently serving ${line.shift()}.`
    : 'There is nobody waiting to be served!';
}

function currentLine (line) {
  let lineStatus = '';
  if (line.length < 1) {
    lineStatus = 'The line is currently empty.';
  }
  else {
    lineStatus ='The line is currently:';
    for (let i = 0; i < line.length; i++) {
      if (i !== line.length -1) {
        lineStatus += ` ${i+1}. ${line[i]},`;
      }
      else {
        lineStatus+= ` ${i+1}. ${line[i]}`;
      }
    }
  }
  return lineStatus;
}
