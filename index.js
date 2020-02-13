function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  let numInLine = katzDeliLine.indexOf(name);
return `Welcome, ${name}. You are number ${numInLine + 1} in line.`;
};


function nowServing(katzDeliLine) {
  let currentCustomer = katzDeliLine[0];
if (katzDeliLine.length >= 1) {
   katzDeliLine.shift(currentCustomer);
 return `Currently serving ${currentCustomer}.`;

 } else {
  return "There is nobody waiting to be served!";
  }
};


 function currentLine(katzDeliLine) {
 if(katzDeliLine.length === 0){
   return "The line is currently empty."
 } else {
   return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1 ]}, 3. ${katzDeliLine[2]}`;
  }
 };



// function currentLine(katzDeliLine) {
// if(katzDeliLine.length === 0){
//   return "The line is currently empty."
// } else {
//   let str = []
//
//   katzDeliLine.forEach((name, index)=> str.push(`${index+1}. ${name}${index+1 != katzDeliLine.length ? "," :''} `))
//
//   return `The line is currently: ${str.join('')}`;
//  }
// };
