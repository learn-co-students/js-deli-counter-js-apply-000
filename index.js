function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.` 
}

function nowServing(katzDeliLine, name) {
if (katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!"
}  
  return `Currently serving ${katzDeliLine.shift()}.`
}
function currentLine (katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var katzDeliIs = [];
    for (let i = 0; i <katzDeliLine.length; i++){
    katzDeliIs.push(`${i+1}. ${katzDeliLine[i]}`) 
  } 
  return `The line is currently: ${katzDeliIs.join(', ' )}`;
  }
}
