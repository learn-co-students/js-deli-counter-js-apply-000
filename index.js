function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);

    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  var currentCustomer = katzDeliLine.shift();
  if (katzDeliLine.length > 0) {
    return `Currently serving ${currentCustomer}.`
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var n = 0;
    for (var i=0; i < katzDeliLine.length; i++) {
      n++;
      katzDeliLine[i] = `${n}. ${katzDeliLine[i]}`
    }
    return `The line is currently: ${katzDeliLine.join(', ')}`
  } else {
    return 'The line is currently empty.'
  }
}
