function takeANumber (katzDeliLine,customer) {
  katzDeliLine.push(customer);
  return `Welcome, ${customer}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine (katzDeliLine) {
  var my_string = []
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  else {
    for (var counter = 0; counter < katzDeliLine.length; counter++) {
      my_string += (counter + 1) + ". " + katzDeliLine[counter] + ", "  
    }
    my_string = my_string.slice(0,my_string.length - 2);
    return "The line is currently: " + my_string;
  }
}