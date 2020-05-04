function takeANumber(num_lines, name) {
  num_lines.push(name)
  return `Welcome, ${name}. You are number ${num_lines.length} in line.`
}

function nowServing(current_line) {
  if (current_line.length > 0) {
    return `Currently serving ${current_line.shift()}.`
  }
  return "There is nobody waiting to be served!"
}

function currentLine(current_line) {
  let arr = []

  if (current_line.length > 0) {
    for (let i = 0; i < current_line.length; i++) {
      arr.push(` ${i+1}. ${current_line[i]}`)
    }
    return "The line is currently:" + arr.join()
  }
  return "The line is currently empty."
}