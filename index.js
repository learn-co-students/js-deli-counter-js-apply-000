function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else return `There is nobody waiting to be served!`
}

function currentLine(katzDeliLine) {
  
  const line = [];
  
  if (katzDeliLine.length > 0) {
    //start with 3 people based on Katz Deli Line 
    for (let i = 0, n = katzDeliLine.length; i < n; i++) {
      line.push(`${i + 1}. ${katzDeliLine[i]}`)
    }
  console.log(line)
  return `The line is currently: ` + line.join(`, `)
  } else return 'The line is currently empty.'
}
