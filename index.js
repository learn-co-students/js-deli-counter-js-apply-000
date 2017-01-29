function takeANumber(katzDeliLine, currPersonName) {
  katzDeliLine.push(`${currPersonName}`);
  return `Welcome, ${currPersonName}. You are number ${katzDeliLine.length} in line.`  
}

// Build a function `nowServing`. This function should return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }

  var currCustomer = katzDeliLine.shift();
  return `Currently serving ${currCustomer}.`
}

 // Build a function `currentLine` that returns the current line. For example, if `katzDeliLine` is currently `["Ada", "Grace"]`, `currentLine(katzDeliLine)` would return `"The line is currently: 1. Ada 2. Grace"`.  If there is nobody in line, it should return `"The line is currently empty."`

 function currentLine(katzDeliLine) {
   if (katzDeliLine.length === 0){
     return 'The line is currently empty.';
     
   } else {
     var announcement = `The line is currently: `;
     
     for (var i = 0; i < katzDeliLine.length; i++) {
       if (i === katzDeliLine.length - 1) {
         announcement += `${i + 1}. ${katzDeliLine[i]}`;
       } else {
         announcement += `${i + 1}. ${katzDeliLine[i]}, `;
       }
     }

     return announcement;
   }
 }