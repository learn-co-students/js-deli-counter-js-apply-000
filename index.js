function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0)
    return "There is nobody waiting to be served!"
  let serving = katzDeliLine.shift()
  return "Currently serving " + serving + "."
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0)
    return "The line is currently empty."
  let string = "The line is currently: ";
  for (let i = 0; i < katzDeliLine.length-1; i++){
    string += i + 1
    string += ". " + katzDeliLine[i] + ", "
  }
  string += katzDeliLine.length
  string += ". " + katzDeliLine[katzDeliLine.length-1]
  return string
}
