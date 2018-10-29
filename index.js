
function takeANumber(line, name) {
  return "Welcome, ${name}. You are number ${line.length} in line."
}

function nowServing(line) {
  if line.length <= 0 {
    return "There is nobody waiting to be served!"
  } else {
    return line.shift()
  }

  //or..
  //return line.length <= 0 ? "There is nobody waiting to be served!" : line.shift()
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  else {
    var names = ""
    for (var i = 0; i < line.length; i++) {
      if (i == (line.length - 1)) {
        names = names + "${i + 1}" + ". " + line[i]
      }
      else {
        names = names + "${i + 1}" + ". " + line[i] + ", "
      }

    }

    return "The line is currently: " + names

  }
}
//return "The line is currently: " +  lines.map(x => line.indexOf(x) + 1 + ". " + x)
