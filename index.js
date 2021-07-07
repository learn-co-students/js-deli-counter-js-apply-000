function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  
  return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(katzDeliLine) {
  const prefix = "The line is currently: "
  const suffix = [];
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  
  for(let i = 0; i < katzDeliLine.length; i++) {
    suffix.push(`${i+1}. ${katzDeliLine[i]}`)
  }
  
  return prefix + suffix.join(", ")
}