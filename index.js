
function takeANumber(line, array) {
    line.push(array)
    return `Welcome, ${array}. You are number ${line.length} in line.`
}

function nowServing(line) {
  let array = line.shift()
  if (array > line.length) {
    return `Currently serving ${array}.`
  } else {
    return `There is nobody waiting to be served!`
  }
}
