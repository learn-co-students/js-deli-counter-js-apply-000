// the test will create a deli's current line 

function takeANumber(currentLine, name) {
  // add the customers name to the end of the list
  // return the annuocenment
  
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.indexOf(name) + 1} in line.`;
}

function nowServing(currentLine) {
  // if line is empty
    // tell the customers
  // else
  // record who is being served
  // remove them from the line
  // return the announcement
  
  if (currentLine.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  let currentCustomer = currentLine[0];
  currentLine.shift();
  return `Currently serving ${currentCustomer}.`;
}

function currentLine(currentLine) {
  // if line is empty
    // tell the customers
  // instaniate the announcement with the first person (there is at least 1 person)
  // iterate over the array (only happens if additional customers are waiting)
    // add additional waiting customers to the announcement
  // return the announcement
  
  if (currentLine.length === 0) {
    return 'The line is currently empty.';
  }
  let announcement = `The line is currently: 1. ${currentLine[0]}`
  for (var i = 1; i < currentLine.length; i++) {
    announcement = announcement.concat(`, ${i + 1}. ${currentLine[i]}`);
  }
  return announcement;
}