function takeANumber(line, name) {
  line.push(name)
  return "Welcome, "+name+". You are number "+line.length+" in line."
}

function nowServing(line) {
  if(line.length==0)
    return "There is nobody waiting to be served!"
  var announcement="Currently serving "+line[0]+"."
  line.shift()
  return announcement
}

function currentLine(line) {
  if(line.length==0)
    return "The line is currently empty."
  var announcement="The line is currently: "
  for(var k=0; k<line.length; k++){
      announcement+=(k+1)+". "+line[k]
      if(k<line.length-1)
        announcement+=", "
  }
  return announcement
}
