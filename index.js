var katzDeli = [];

// var takeANumber = function(katzDeli, newCustomer) {

function takeANumber(currentLine, newCustomer) {
    
    // if (currentLine.length > 0);
      currentLine.push(newCustomer);
      return 'Welcome, ' + newCustomer + '. You are number ' + currentLine.length + ' in line.'
  }
 
function nowServing (currentLine) { 
    if(currentLine.length===0) { 
    return 'There is nobody waiting to be served!'; 
}
    var customer = currentLine.shift(); 
    return "Currently serving " + customer + "."; 
}



// var currentLine = function (currentLine) {
function currentLine(currentLine){
  if (currentLine.length === 0) {
  return "The line is currently empty.";
}
    var customerAndNumber = [];
    for (var i=0; i<currentLine.length; i++) {
    customerAndNumber.push(i + 1 + ". " + currentLine[i])
}
  return "The line is currently: " + customerAndNumber.join(", ");
}
