

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`
}


function nowServing(katzDeliLine, name) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
      return `Currently serving ${katzDeliLine.splice(0,1)}.`
    }
}


function currentLine(line, name) {
  if (line.length === 0) {
    return `The line is currently empty.`
  } else {
      let array = []
      let i
        for (i = 0; i < line.length; i++) {
        array.push(` ${i + 1}. ${line[i]}`)
        }
      return 'The line is currently:' + array
  }
}
