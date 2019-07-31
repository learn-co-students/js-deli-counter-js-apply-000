/* let katzDeliLine = [] */

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
 return `Welcome, ${newName}. You are number ${katzDeliLine.indexOf(newName) + 1} in line.` 
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
  return "There is nobody waiting to be served!";
  }
  let currently = katzDeliLine[0];
  katzDeliLine.shift();
  return `Currently serving ${currently}.`;
  }
  
function currentLine(katzDeliLine) {
 
   /* if (katzDeliLine.length <= 0) {
    return "The line is currently empty.";
  } else {
    let newLine = [];
      for(let i = 0; i < katzDeliLine.length; i++) {
  newLine.push(katzDeliLine.indexOf(katzDeliLine[i]) +  “.” + katzDeliLine[i]);
  console.log(newLine[0]);
    return "The line is currently: " + newLine.join();
   }
  }
} */

if (katzDeliLine.length == 0) {
  return 'The line is currently empty.';
}
let bomboclat = '';
for (let i = 0; i < katzDeliLine.length; i++) {
  bomboclat += `${i + 1}. ${katzDeliLine[i]}, `;
  }
  return `The line is currently: ` + bomboclat.slice(0, -2);
}