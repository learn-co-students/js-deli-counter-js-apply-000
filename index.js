//Take a Number Feature for Deli counter

//There are 0 customers at start of day
var katzDeli = [];

// function takeANumber(katzDeliLine, customerName) {
//   katzDeliLine.push(customerName)
//   return "Welcome, ${customerName}. You are number ${katzDeliLine.length} in line."
// }

function takeANumber(katzDeliLine, newCustomerName) {
  katzDeliLine.push(newCustomerName)
  return `Welcome, ${newCustomerName}. You are number ${katzDeliLine.length} in line.`
};

//Return the first name in katzDeliLine array
//Remove ("shift") that name from array, destructively return array
//Create if/else statement

function nowServing(thisCustomer) {
  if (0 === thisCustomer.length) {
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${thisCustomer.shift()}.`
  }
};

function currentLine(thisLine) {
  if (0 === thisLine.length) {
    return "The line is currently empty."
  }
  else {
    for (let i = 0, s = thisLine.length; i < s; i++) {
      katzDeli.push(`${i + 1}. ${thisLine[i]}`)
    }
    return `The line is currently: ${katzDeli.join(', ')}`
  }
};
