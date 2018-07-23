var katzDeliLine = []

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var firstInLine = katzDeliLine.splice(0, 1)[0]
    return `Currently serving ${firstInLine}.`
  } else {
      return 'There is nobody waiting to be served!'
    }
}

function currentLine(katzDeliLine) {
  var linePhrase =  ""
  if(katzDeliLine.length === 0) {
      return 'The line is currently empty.'
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      linePhrase = linePhrase + (`${i + 1}. ${katzDeliLine[i]}, `)
    }
  } return `The line is currently: ${linePhrase.slice(0,-2)}`
}
