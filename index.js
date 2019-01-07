
function takeANumber(line, name) {
  line.push(name)
  var location = line.indexOf(name) + 1
  return 'Welcome, ' + name + '. You are number '+ location +' in line.'
}


function nowServing(line) {
  if (line.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + line.shift() + '.';
  }
}

function currentLine(line) {
  var string = "The line is currently"
  if (line.length == 0) {
    string += " empty."
  } else {
    string += ": "
    var i = 0
    for (i = 0; i < line.length; i++){
      var count = i + 1
      string += count + ". " + line[i]
      if (i != line.length-1) {
        string += ", "
      }
    }
  }
  return string
}
