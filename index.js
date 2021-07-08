function takeANumber (line, name){
  line.push(name);
  var position = line.indexOf(name)+1
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(line){
  if(!line){
    return "The object inputted is not an array."
  } else if (line.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving "+ line.shift() + "."
  }
}

function currentLine(line){
  var reply = "The line is currently:"
  if (line.length == 0) {
    return "The line is currently empty."
  } else {
    for (var i = 0; i < line.length; i++) {
      var position = i+1;
      if (i == 0) {
        reply += ` ${position}. ${line[i]}`
      }else {
        reply += `, ${position}. ${line[i]}`
      }

    }
  }

  return reply
}
