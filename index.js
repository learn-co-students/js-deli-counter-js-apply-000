/* let katzDeliLine = [] */

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
 return `Welcome, ${newName}. You are number ${katzDeliLine.indexOf(newName) + 1} in line.` 
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!";
  }
  let currently = katzDeliLine[0];
  katzDeliLine.shift();
  return `Currently serving ${currently}.`;
  }
  
function currentLine(katzDeliLine) {
 
if (katzDeliLine.length === 0) {
  return 'The line is currently empty.';
}
let nowLine = '';
for (let i = 0; i < katzDeliLine.length; i++) {
  nowLine += `${i + 1}. ${katzDeliLine[i]}, `;
  }
  return `The line is currently: ` + nowLine.slice(0, -2);
}