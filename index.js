

function takeANumber (katzDeliLine, newCustomer){
  katzDeliLine.push(newCustomer);
  return 'Welcome, ' +newCustomer+ '. You are number ' +katzDeliLine.length + ' in line.';
}
takeANumber(['me'], "sonia")

function nowServing (katzDeliLine) { 
 if(katzDeliLine.length===0) {
return 'There is nobody waiting to be served!'; 
 var customer = katzDeliLine.shift(); 
 return "Currently serving " + customer + "."; 
}
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length===0){
    return "The line is currently empty.";
  }
  else {
  var results = [];
  for(var i=0; i<katzDeliLine.length; i++){
    results. push(parseInt([i]) + 1 +'. '+ katzDeliLine[i]);
  }
  
  return "The line is currently: "+ results.join(', ')
}}
currentLine(["Ada", "Grace"])




