let katzDeliLine = [];
let num = 0;

const takeANumber = function (deliLine, newPerson) {
  deliLine.push(newPerson)
  let lineSpot = deliLine.length
  return `Welcome, ${newPerson}. You are number ${lineSpot} in line.`
}

const nowServing = function (deliLine) {
  if (deliLine[0]) {
    let lastServed = deliLine[0]
    deliLine.shift()
    return `Currently serving ${lastServed}.`
  } else {
    return 'There is nobody waiting to be served!'
  }
}

const currentLine = function (deliLine) {
  let lineString = 'The line is currently: '
  if (deliLine.length === 0) {
    return 'The line is currently empty.'
  } else {
    for (let i = 0; i < deliLine.length; i++) {
      let currentCustomer = deliLine[i]
      if (i === deliLine.length - 1) {
        lineString += `${i + 1}. ${currentCustomer}`
      } else {
        lineString += `${i+1}. ${currentCustomer}, `
      }
    }
    return lineString
  }
}