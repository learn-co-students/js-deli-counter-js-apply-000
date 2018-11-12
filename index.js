
function takeANumber(line, name) {
  line.push(name)
  return "Welcome, " + name + ". You are number " + line.length + " in line."
  //Question: ${name} not working, why?
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + line.shift() + "."
    //shift() returns first item and removes it
  }

  //or..
  //return line.length <== 0 ? "There is nobody waiting to be served!" : "Currently serving " + line.shift() + "."
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  else {
    var names = ""
    for (var i = 0; i < line.length; i++) {

      names = names + (i + 1) + ". " + line[i]

      if (i != (line.length - 1)) {
      	names = names + ", "
      }

    }

    return "The line is currently: " + names

  }
}
