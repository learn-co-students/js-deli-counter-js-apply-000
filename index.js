var katzDeliLine = []
function takeANumber(katzDeliLine, names){
  katzDeliLine.push(names);
    return (`Welcome, ${names}. You are number ${katzDeliLine.length} in line.`)
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    return (`Currently serving ${katzDeliLine.shift()}.`)
  }
}
function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
}
var array = []
for (let i=0; katzDeliLine.length>i; i++){
array.push(`${i + 1}`);
return (`The line is currently: ${array}. ${katzDeliLine[i]},`)
}
}