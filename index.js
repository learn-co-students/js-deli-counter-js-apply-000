 /*
 
 customerName: string,
 line: array
 
 takeANumber adds customerName to end of line, and returns a welcome message
 
 */

const takeANumber = (line, customerName) => {
  
  // add customer to line
  line.push(customerName);
  
  // welcome message
  const linePosition = line.length;
  const message = `Welcome, ${customerName}. You are number ${linePosition} in line.`; 
  
  return message; 
 
}

/*

line: array

if line array is empty, returns 'line is empty' message. Otherwise,
removes the first element of line, and returns 'now serving customer c' message. 

*/

const nowServing = line => {
  
  // serving customer message
  let message; 
  
  if (line.length > 0) { // there is at least one customer
  
    // remove customer from line
    const customer = line.shift();
    
    // update message 
    message = `Currently serving ${customer}.`;
    
  } else { // no customers, empty line
    
    // update message
    message = "There is nobody waiting to be served!"; 
    
  } 
  
  return message;
  
}

/*

line: array

currentLine returns a message about the line status 

*/

const currentLine = line => {
  
  // line status message
  let message = '';
  
  if (line.length > 0) { // line is not empty
  
     // update message
    message += 'The line is currently: ';
    line.forEach( (customer, index) => {
    message += `${index + 1}. ${customer}${(index === line.length - 1) ? '': ', '}`
    })
    
  } else { // line is empty
    
    // update message
    message = "The line is currently empty."; 
  }
  
  return message;
} 

