// function takeANumber(katzDeliLine, name) {
//   katzDeliLine.push(name);
//   return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
// }

var counter = 0

function takeANumber(katzDeliLine){
  counter ++;
  katzDeliLine.push(counter);
  return `Welcome, you are ticket number ${counter}`;
  
}

function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "There is nobody waiting to be served!";
  }
return `Currently serving ${katzDeliLine.shift()}.`;
}

 
function currentLine(katzDeliLine) {
  var namesAndNumbers = []
  if (!katzDeliLine.length) {
    return "The line is currently empty."}
    
  for (var i = 0, l=katzDeliLine.length; i < l; i++){
    namesAndNumbers.push(`${i + 1}. ${katzDeliLine[i]}`)
  }
    return `The line is currently: ${namesAndNumbers.join(', ')}`;
}