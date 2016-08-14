var katzDeli = [];

function takeANumber(line, person){
  line.push(person);
  return 'Welcome, ' + person + ". You are number " + line.length +" in line."
}

function nowServing(line){
  if (line.length == 0){
    return "There is nobody waiting to be served!"
  }
  return "Currently serving " + line.shift() + "."
}

function currentLine(line){
  if (line.length == 0){
    return "The line is currently empty."
  }
  var currentLine = ""
  for(var i = 0; i < line.length; i++){
    if(i < line.length - 1){
      currentLine += ((i + 1) + ". " + line[i] + ", ")
    }    else {
      currentLine += ((i + 1) + ". " + line[i])
    }
  }
  return "The line is currently: " +currentLine
}
