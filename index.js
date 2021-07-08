var katzDeliLine = [];

function takeANumber(line, customer) {
  line.push(customer);
  return `Welcome, ${customer}. You are number ${line.length} in line.`;
}

function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.';
  }
  return 'The line is currently:' + line.map(function(customer, i) {
    return ` ${i + 1}. ${customer}`;
  }).join(',');
}

function nowServing(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  var currentCustomer = line.shift();
  return `Currently serving ${currentCustomer}.`;
}
