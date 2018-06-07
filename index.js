var katzDeli = [];

function takeANumber (currentLine, newName) {
  currentLine.push(newName);
  return 'Welcome,' + ' ' + newName + '.' + ' You are number' + ' '+ currentLine.length +  ' '+'in line.'
  
}
  
function nowServing(currentLine){ var nowServing = 0 ;
  if(!currentLine.length){
    return 'There is nobody waiting to be served!';
  }
  
  var customer = currentLine.shift();
  return 'Currently serving ' + customer + '.';
  
}

function currentLine(currentLine){
  if(!currentLine.length){
    return 'The line is currently empty.';
  }
  
  var customers = " ";
  // Rewrite this part to use a "for" loop instead of "forEach"

  currentLine.forEach(function(customer,index) {
    customers += index + 1 + '. ' + customer + '';
    
    if (index < currentLine.length -1){
      customers +=', ';
      
    }
  });
  
  return 'The line is currently:' +  customers;
}