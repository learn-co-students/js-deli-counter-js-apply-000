/* There is nobody waiting to be served!
Currently serving Steven.
*/

function takeANumber (line, customers) {
  line.push(customers); //because test says "Welcome, Ada. You are number 1 in line." - it means that this customer is pushed towards the end of the line;
  return (`Welcome, ${customers}. You are number ${line.length} in line.`);
}

var katzDeliLine
function nowServing (katzDeliLine) { //line is really the names - .length is the number
 if (katzDeliLine.length===0){
    return 'There is nobody waiting to be served!';
  }
 
 var firstCustomer = katzDeliLine.shift();
  return ('Currently serving ' + firstCustomer + '.');
}


function currentLine (line) { //line is really the names - .length is the number
  if (line.length===0){ //there's no need for an empty array because no data needs to be stored
    return 'The line is currently empty.';
  }
  
  
  const lineAsFollows = [];
  for (let i=0, l=line.length; i<l; i++) {
    lineAsFollows.push(` ${i+1}. ${line[i]}`);
  }
    return 'The line is currently:' + lineAsFollows;
}


// However, you don't need to code the array as a variable, since the test scripts will create it and pass it to the functions you are about to build.
// revise: when var or const
// revise: console.log vs return