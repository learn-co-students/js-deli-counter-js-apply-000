let katzDeliLine = [];


function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(`${name}`);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}


function nowServing(katzDeliLine) {
   return (katzDeliLine.length > 0) ? 
  `Currently serving ${katzDeliLine.shift()}.` :
  'There is nobody waiting to be served!'
}

function currentLine(katzDeliLine) {
  let line = [];
  let count = 0;
  if (katzDeliLine.length > 0) {
    for(let i of katzDeliLine) {
      count++;
      line.push(count + ". " + i)
    } return `The line is currently: ${line.join(', ')}`;
  } else {
    return "The line is currently empty."
  }
}