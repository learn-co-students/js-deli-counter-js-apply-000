var katzDeliLine = [];

function takeANumber(line, customer) {
  line.push(customer);
  return `Welcome, ${customer}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length < 1) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line) {
  if (line.length < 1) {
    return "The line is currently empty."
  } else {
    var names = '';
    for (var i = 0; i < line.length; i++) {
      if (i === 0) {
        names+=`1. ${line[0]}`
      } else {
        names+=`, ${[i+1]}. ${line[i]}`
      }
    }
    return "The line is currently: " + names
  }
}
