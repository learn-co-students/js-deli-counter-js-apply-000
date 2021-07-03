var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)

  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine) {
  let numberedLine = []

  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }


    while (katzDeliLine.length > 1) {
      let l = katzDeliLine.length
      let name = katzDeliLine.pop()

      numberedLine.unshift(` ${l}. ${name}`)
    }
    if (katzDeliLine.length = 1) {
      let name = katzDeliLine

      numberedLine.unshift(`1. ${name}`)
    }
    return `The line is currently: ${numberedLine}`

}
