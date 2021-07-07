function takeANumber (currentLinePlace,custName) {
  if (currentLinePlace.length > 0);
     currentLinePlace.push(custName);
    return 'Welcome, ' + custName + '. You are number ' + currentLinePlace.length + ' in line.'
 }
 
 function nowServing (currentLinePlace){
   if (currentLinePlace.length === 0)
   return 'There is nobody waiting to be served!';

 var customer = currentLinePlace.shift();
 return 'Currently serving ' + customer + '.';
 }
 
 function currentLine(currentLinePlace){
   if (currentLinePlace.length === 0) {
   return 'The line is currently empty.';
   }
 
 var custAndNum = [];
 for (var i=0; i<currentLinePlace.length; i++) {
 custAndNum.push(i + 1 + ". " + currentLinePlace[i])
   }
 return "The line is currently: " + custAndNum.join(", ");
 }

 