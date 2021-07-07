const takeANumber = (line, person) => {
  line.push(person)
  return (`Welcome, ${person}. You are number ${line.length} in line.`)
}


const nowServing = (line) => {
  if (line.length > 0)
    return `Currently serving ${line.shift()}.`
  else
    return "There is nobody waiting to be served!"
}

const currentLine = (line) => {
  if (line.length === 0) {
    return ("The line is currently empty.")
  } else {
    let namesArr = []
    for (let i = 0; i < line.length; i++) {
      namesArr.push(`${i + 1}. ${line[i]}`)
    }
    return (`The line is currently: ${namesArr.join(", ")}`)
  }
}