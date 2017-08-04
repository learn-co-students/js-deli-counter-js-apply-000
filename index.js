var katzDeliLine = [];
function takeANumber (katzDeliLine, customer) {
    var line = katzDeliLine.length;
  katzDeliLine.push(customer);
  return `Welcome, ${customer}. You are number ${line+1} in line.`;
}

function nowServing (katzDeliLine) {
    var line = katzDeliLine.length;
  if (line > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
  else {
    return `There is nobody waiting to be served!`;
  }
}

function currentLine (katzDeliLine) {
 var KL = katzDeliLine.length;
 var i = 0;
 while (i < KL){
   katzDeliLine[i] = [` ${i+1}. ${katzDeliLine[i]}`];
   i++}
 if (i>0) {
   return `The line is currently:${katzDeliLine} `;
 }
 else {
   return "The line is currently empty."
}
}
