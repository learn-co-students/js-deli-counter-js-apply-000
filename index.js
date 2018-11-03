function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if(line.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    var cur = line.shift()
    return `Currently serving ${cur}.`
  }
}

function currentLine(line) {
  if(line.length == 0) {
    return "The line is currently empty."
  } else {
    var str = "The line is currently: "

    let i = 0
    do {
      str += `${i+1}. ${line[i]}, `
      i++
    } while (i < line.length-1)
    str += `${i+1}. ${line[i]}`

    return str
  }
}
