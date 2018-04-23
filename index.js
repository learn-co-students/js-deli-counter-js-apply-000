var x = [];
var katzDeliLine = [];
let i = 0; 

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {var p =  `Currently serving ${katzDeliLine[i]}.`
    katzDeliLine.shift()
    return p;
  }
    
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
   x.push(`${i+1}. ${katzDeliLine[i]}`)
   for (let i = 1; i < katzDeliLine.length; i++) {
  x.push(` ${i+1}. ${katzDeliLine[i]}`)
    }
  return `The line is currently: ${x}`
  }
}

