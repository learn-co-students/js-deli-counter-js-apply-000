function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } 
  else {
    let i = 0;
    while (i < katzDeliLine.length) {
      i++
    }
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

var line = []
function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  else {
    let i = 0;
    while (i < katzDeliLine.length) {
      line.push(` ${[i+1]}. ${katzDeliLine[i]}`) 
      i++
    }
  return (`The line is currently:${line}`)
  }
}