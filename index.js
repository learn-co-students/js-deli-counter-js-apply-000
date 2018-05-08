var katzDeli = [];

var takeANumber = function(katzDeli, newCustomer) {
    
  if (katzDeli.length > 0);
  katzDeli.push(newCustomer);
  return ('Welcome, ' + newCustomer + '. You are number ' +  katzDeli.length + ' in line.')
}

function nowServing (katzDeli) {
  
  if(katzDeli.length===0) { 
  return 'There is nobody waiting to be served!'; 
}
 
  var customer = katzDeli.shift(); 
  return "Currently serving " + customer + "."; 
}

var currentLine = function (katzDeli) {
   
  if (katzDeli.length===0) {
  return "The line is currently empty.";
}
 
  var customerAndNumber = [];
  for (var i=0; i<katzDeli.length; i++) {
  customerAndNumber.push(i + 1 + ". " + katzDeli[i])
    
}
  return "The line is currently: " + customerAndNumber.join(", ");
}


 


   
