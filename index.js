function takeANumber(line, newPerson) {
  line.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line) {
  var statement = "The line is currently"
  if (line.length === 0) {
    statement += " empty."
  } else
    statement += ":"
    for (var i = 0; i < line.length; i++) {
      statement += ` ${i+1}. ${line[i]}`
      if (i + 1 < line.length) {
        statement += ","
      }
  }
  return statement
}
