var katzDeliLine = [];

function takeANumber(katzDeliLine, customer) {
  katzDeliLine.push(customer);
  return `Welcome, ${customer}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine[0]) {
    var currentCust = `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.splice(0, 1);
    return currentCust;
  }
  else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return 'The line is currently empty.'
  }
  else {
    var currentCustz = "The line is currently: ";
    for (var i = 0; i < katzDeliLine.length; i++) {
      currentCustz += i + 1 + '. ' + katzDeliLine[i];
      if (i < katzDeliLine.length - 1) {
        currentCustz += ', ';
      }
    }
    console.log(currentCustz);
    return currentCustz;
  }
}
