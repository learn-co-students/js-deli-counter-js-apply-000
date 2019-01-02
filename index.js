/**
 * Given an array of current customers and
 * the name(s) of one or more new customers,
 * updates the line of customers and returns
 * a string describing the line position(s) of
 * the new customer(s).
 */
function takeANumber (katzDeliLine, newCustomer) {
  if (typeof newCustomer === 'string') {
    katzDeliLine.push(newCustomer);
    return 'Welcome, ' + newCustomer + '. You are number ' + katzDeliLine.length + ' in line.';
  } else if (Array.isArray(newCustomer)) {
    let i = 0;
    let newCustomerMessage = '';
    while (i < newCustomer.length) {
      katzDeliLine.push(newCustomer[i]);
      newCustomerMessage += 'Welcome, ' + newCustomer[i] + '. You are number ' + katzDeliLine.length + ' in line.';
      i++;
    }
    return newCustomerMessage;
  } else return 'ERROR: Input must be a string or array';
}



/**
 * Removes the first customer from a
 * deli line array and returns a string
 * describing who is now being served.
 */
function nowServing (katzDeliLine) {
  if (Array.isArray(katzDeliLine)) {
    if (katzDeliLine.length > 0) {
      const firstCustomer = katzDeliLine.shift();
      return 'Currently serving ' + firstCustomer + '.';
    } else return 'There is nobody waiting to be served!';
  } else return 'ERROR: Input must be an array';
}



/**
 * Converts a current line of customers from
 * an array to a string.
 */ 
function currentLine (katzDeliLine) {
  if (Array.isArray(katzDeliLine)) {
    if (katzDeliLine.length > 0) {
      let i = 0;
      let lineMessage = 'The line is currently: ';
      while (i < katzDeliLine.length - 1) {
        lineMessage += i + 1 + '. ' + katzDeliLine[i] + ', ';
        i++;
      }
      lineMessage += i + 1 + '. ' + katzDeliLine[i];
      return lineMessage;
    } else return 'The line is currently empty.';
  } else return 'ERROR: Input must be an array';
}