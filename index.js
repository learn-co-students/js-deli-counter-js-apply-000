function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine) {
  let arr = [];
  for (let i = 0; i < katzDeliLine.length; i++) {
    arr.push(`${i+1}. ${katzDeliLine[i]}`);
  }
  
  let str = "The line is currently: " + arr.join(', ');
  
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    return str;
  }
}