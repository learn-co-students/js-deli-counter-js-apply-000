function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person)

  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }

  let nextPersonServed = katzDeliLine.shift()
  return `Currently serving ${nextPersonServed}.`
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }

  const katzDeli = []

  for (let i = 0; i < katzDeliLine.length; i++) {
    katzDeli.push(`${i + 1}. ${katzDeliLine[i]}`)
  }

  return `The line is currently: ${katzDeli.join(', ')}`
}