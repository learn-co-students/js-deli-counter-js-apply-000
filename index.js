const takeANumber = (line, newCust) => {
  line.push(newCust)
  return `Welcome, ${newCust}. You are number ${line.length} in line.`
}

const nowServing = (katzDeliLine) => {
  if (katzDeliLine.length === 0) return `There is nobody waiting to be served!`
  return `Currently serving ${katzDeliLine.shift()}.`
}

const currentLine = line => {
  let lineStr = `The line is currently: `
  
  if (line.length === 0) return `The line is currently empty.`
  
  for (let i = 0; i < line.length; i++) {
    lineStr += `${i+1}. ${line[i]}`
    if (i !== line.length - 1) lineStr += `, `
  }
  
  return lineStr
}