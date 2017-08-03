function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName)
  let a = katzDeliLine.indexOf(newName)
  let b = a + 1
  return `Welcome, ${newName}. You are number ${b} in line.`
}

let deliLine = ["Steven", "Blake", "Avi"]

function nowServing(deliLine) {
  if (deliLine.length > 0) {
    let z = deliLine.shift()
    return `Currently serving ${z}.`
  } else {
    return `There is nobody waiting to be served!`
  }
}

function currentLine(katzDeliLine) {
  let newLine = []
  if (katzDeliLine.length > 0) {
    for (let i = 0; i < katzDeliLine.length; i++) {
      newLine.push(`${i + 1}. ${katzDeliLine[i]}`)
      }
    return `The line is currently: ${newLine.join(", ")}`
  } else {
    return `The line is currently empty.`
  }
}
