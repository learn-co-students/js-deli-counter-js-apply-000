
function takeANumber (katzDeliLine, newCustomer){
  //put newCustomer into an array
  katzDeliLine.push(newCustomer);
  
  // take the name from Array
  let numberInLine = katzDeliLine.indexOf(newCustomer) + 1;
  
  return `Welcome, ${newCustomer}. You are number ${numberInLine} in line.`;
}


function nowServing (katzDeliLine){
  for (let i = 0; i < katzDeliLine.length; i++) {
    //looping thru the array of customers and taking the frist element of the array out and assign it to a variable 
    let currentCustomer = katzDeliLine.shift(); 
    return `Currently serving ${currentCustomer}.`;
  }
    // case when the length is actually equal to 0
    return `There is nobody waiting to be served!`;
}

function currentLine (katzDeliLine) {
    if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
 else {
    let buildString = [];
   //loop through array and return as string
   for (let i = 0; i < katzDeliLine.length; i++){
     let numberInArr = (i+1).toString(); //building the index number in front of the name 1. adam, 2.victoria
      buildString.push(` ${numberInArr}. ${katzDeliLine[i]}`); // 1.victoria
   }
  return "The line is currently:" + buildString.toString();
  }
}