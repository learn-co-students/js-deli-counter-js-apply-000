function takeANumber(current, newCus) {
  var num = current.length + 1;
  var message = `Welcome, ${newCus}. You are number ${num} in line.`;
   current.push(newCus);
  return message;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    var message = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
    return message;
  }
}

function currentLine(katzDeliLine) {
  var customer = '';
  
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  } 
  
  for (var i = 0; i < katzDeliLine.length; i++) {
   customer += (i + 1) + ". " + katzDeliLine[i] + ", ";
  }
  
  customer = customer.slice(0, -2);
  
return `The line is currently: ${customer}`;
}