let katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function currentLine(katzDeliLine, name) {
  let base = 'The line is currently: '
  if(katzDeliLine.length === 0) {return 'The line is currently empty.'}

  for(let i = 0; i < katzDeliLine.length; i++) {
    base += `${i + 1}. ${katzDeliLine[i]}`
    if(i + 1 !== katzDeliLine.length) {base += ', '}
  }
  return base
}

function nowServing(katzDeliLine, name) {
  if(katzDeliLine.length === 0) {return `There is nobody waiting to be served!`}
  return `Currently serving ${katzDeliLine.shift()}.`
}
