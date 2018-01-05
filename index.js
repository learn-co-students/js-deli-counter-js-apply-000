function takeANumber (arrOfCustomers, newCustomer) {
  arrOfCustomers.push(newCustomer);
  return 'Welcome, ' + newCustomer + '. You are number ' + (arrOfCustomers.indexOf(newCustomer) + 1) + ' in line.';
}

function nowServing (arrOfCustomers) {
  if(arrOfCustomers.length > 0){
    var currentlyServing = arrOfCustomers.shift();
    return 'Currently serving ' + currentlyServing + '.';
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine (arrOfCustomers) {
  var line = '';
  if(arrOfCustomers.length === 0){
    return 'The line is currently empty.';
  }
  for (var i = 0; i < arrOfCustomers.length; i++) {
    if (i < arrOfCustomers.length - 1 ) {
      line += i + 1 + '. ' + arrOfCustomers[i] + ', ';
    } else {
      line += i + 1 + '. ' + arrOfCustomers[i]; 
    }
  }
  
  return 'The line is currently: ' + line;
}