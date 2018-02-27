var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`)
}
function nowServing(katzDeli) {
 if (katzDeli.length > 0) return (`Currently serving ${katzDeli.shift()}.`)
 else return (`There is nobody waiting to be served!`)
}

function currentLine(katzDeli) {
  if (katzDeli.length === 0) return (`The line is currently empty.`)
  else 
  var currentlyTheLineIs = `The line is currently: 1. ${katzDeli[0]}`
 
 for(let i = 1; i<katzDeli.length;i++){
 currentlyTheLineIs += `, ${i+1}. ${katzDeli[i]}`
 }
 return currentlyTheLineIs
}