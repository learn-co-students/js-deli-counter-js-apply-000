function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  let position = katzDeliLine.length
  
  return `Welcome, ${name}. You are number ${position} in line.`
  
}

let nowServing = (katzDeliLine) => {
  if (katzDeliLine.length === 0) return "There is nobody waiting to be served!"
  
  return `Currently serving ${katzDeliLine.shift()}.`
}

let currentLine = (katzDeliLine) => {
  if (katzDeliLine.length === 0) return "The line is currently empty."
  
  let lineInfo = 'The line is currently: '
  
  for (let i = 0; i < katzDeliLine.length; i++) {
    let position = i + 1
    let person = katzDeliLine[i]
    lineInfo += `${position}. ${person}, `
  }
  
  lineInfo = lineInfo.slice(0, -2)
  return lineInfo
}