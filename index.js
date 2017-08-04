var katzDeliLine = [];
function takeANumber (katzDeliLine, customer) {
  var line = katzDeliLine.length;
  katzDeliLine.push(customer);
  return 'Welcome, ${customer}. You are number ${line} in line';
}
}
