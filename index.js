var takeANumber = function(line, name) {
  line.push(name)
  var lineLength = line.length
  return `Welcome, ${name}. You are number ${lineLength} in line.`
}

var nowServing = function(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    var firstPerson = line.shift()
    
    return `Currently serving ${firstPerson}.`
  }
}

var currentLine = function(line) {
  if (line.length === 0) {
    return 'The line is currently empty.'
    
  } else {
    
    var counterCall = "The line is currently: "
    var str = ""
    
    for (var i = 0; i < line.length; i++) {
      str = str + ` ${i + 1}. ${line[i]},`
    }
    
    var strNames = str.slice(0, str.length - 1)
    
    return counterCall + strNames.trim()
  }
}