var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
  
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length) {
    return "Currently serving " + katzDeliLine.shift() + "."
  } else {return "There is nobody waiting to be served!"}
}

let line = []

function currentLine(katzDeliLine) {
  for (let i= 0; i<katzDeliLine.length; i++ ) {
    const position = i+1;
    line.push(" " + position + ". " + katzDeliLine[i])
  }
  
  if (line.length === 0) {
    return "The line is currently empty."
  } else{
    return "The line is currently:" + line
  }
}