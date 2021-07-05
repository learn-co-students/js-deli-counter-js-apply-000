var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}
 
 function nowServing(katzDeliLine) {
   if (katzDeliLine.length === 0) {
     return 'There is nobody waiting to be served!';
   } else {
     return `Currently serving ${katzDeliLine.shift()}.`;
   }
 }
 
 function currentLine(katzDeliLine) {
   if (katzDeliLine.length === 0) {
     return 'The line is currently empty.';
   }
   katzDeliLine.forEach(function(item, index) {
     return `The Line is currently: ${index}. ${item}`;
   })
 }
 
function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  const indexAndName = []
  for (let i = 0, l = line.length; i < l; i++) {
    indexAndName.push(`${i + 1}. ${line[i]}`);
  }
  
  return `The line is currently: ${indexAndName.join(', ')}`
}
 