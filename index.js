function takeANumber (customersWaiting, newCustomer) {
  customersWaiting.push(newCustomer);
  return 'Welcome, ' + newCustomer + '. You are number ' + customersWaiting.length + ' in line.';
}



function nowServing(customersWaiting) {
  var returnString = 'There is nobody waiting to be served!';
  
  if (customersWaiting.length >= 1) {
    returnString = 'Currently serving ' + customersWaiting[0] +'.';
    customersWaiting.shift();
  }
  return returnString;
}



function currentLine(customersWaiting) {
 var currentLine = 'The line is currently empty.'; 
  
    if (customersWaiting.length >= 1) {
      currentLine = 'The line is currently: ';
      
      for (var counter=0; counter <= customersWaiting.length-1;counter++) {
         currentLine += (counter+1) + '. ' + customersWaiting[counter];
         (counter <= customersWaiting.length-2) ? currentLine += ', ':'';
      }
    }
     return currentLine;
}