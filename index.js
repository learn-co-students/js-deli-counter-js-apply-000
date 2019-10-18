//Returns a welcome message including the new person's position in line
function takeANumber (katzDeliLine, newCustomer) {
  // add new customer to the end of the queue
  katzDeliLine.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`;
}

//ReturnS the first person in line and then removes that individual from the line
function nowServing(katzDeliLine) {
  // return message if no one is in line
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  
  // remove next customer from the line 
  var nextUp = katzDeliLine.shift();
  
  return `Currently serving ${nextUp}.`;
}

//Returns the current line as a string;
function currentLine (katzDeliLine) {
  // return message if no one is in line
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  
  // loop through the line and add current place in line and name for each customer
  var output = "The line is currently: ";
  for (var i = 0; i < katzDeliLine.length; i++) {
    output += `${i+1}. ${katzDeliLine[i]}, `;
  }
  
  // remove last 2 characters ", " from the output
  output = output.substring(0, output.length - 2);
  
  return output;
}