let katzDeliLine = [];

function takeANumber(katzDeliLine, customerName) {
  katzDeliLine.push(customerName)
  return `Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
  return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(katzDeliLine) {
  let orderOfPpl = [];
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  } else {
    for (let i = 0; i < katzDeliLine.length; i++) {
      let currCustomer = katzDeliLine[i];
      let currPosition = i + 1 + '. ';
      let order = currPosition + currCustomer
      orderOfPpl.push(order);
    }
    orderOfPpl = orderOfPpl.join(', ')
  return `The line is currently: ${orderOfPpl}`
}
}