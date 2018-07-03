function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}
function nowServing(deliLine){
  var i = 0;
  if (i < deliLine.length){
    return `Currently serving ${deliLine.shift([i])}.`}
    else {
    return `There is nobody waiting to be served!`;
    }
  }
  function currentLine(line){
    if (line.length === 0) {
     return "The line is currently empty."
 } else {
   var newline = []
    for (let i = 0; i < line.length; i++) {
   newline.push(` ${i+1}. ${line [i]}`)
 }
 return `The line is currently:${newline}`;
 }
 }
