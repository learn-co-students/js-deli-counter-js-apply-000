var katzdeliLine = []

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  for (let i = 0; i < katzDeliLine.length; i++) {
    if (katzDeliLine[i] === newName) {
      return `Welcome, ${newName}. You are number ${i+1} in line.`
    }
  }
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var currentlyServing = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${currentlyServing}.`
  }
}

function currentLine(katzDeliLine) {
  var linestring = "The line is currently: "
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for (let i =0; i < katzDeliLine.length; i++) {
        if (i < katzDeliLine.length-1) {
        linestring+= `${i+1}. ${katzDeliLine[i]}, `
      } else {
        linestring+= `${i+1}. ${katzDeliLine[i]}`
      }
    }
  }
  return linestring
}
