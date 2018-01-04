var katzDeli = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var position = katzDeliLine.length
  return (`Welcome, ${name}. You are number ${position} in line.`)
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
      var nowServing = katzDeliLine.splice(0, 1);
      return `Currently serving ${nowServing}.`
  } else {
    return 'There is nobody waiting to be served!'
  }
}
function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    let line = 'The line is currently:'
    for (let i = 0; i < katzDeliLine.length; i++) {
      if ((i + 1) < katzDeliLine.length) {
        line += ` ${i + 1}. ${katzDeliLine[i]},`
      } else {
        line += ` ${i + 1}. ${katzDeliLine[i]}`
      }
    }
    return line;
  } else {
    return 'The line is currently empty.'
  }
}
