function takeANumber(line, people){
  line.push(people)
  var string = "Welcome, " + people + ". You are number " + line.length + " in line."
  return string
}
function nowServing (line){
  var firstPerson = ""
  var string = "Currently serving "
  if (line.length === 0){
    return "There is nobody waiting to be served!"
  }
  else {
    firstPerson = line.shift()
    return string + firstPerson + "."
  }
}
function currentLine(line){
  var lineString = ""
  var lineNameTemp = ""
  var index = ""
  var lineStringTemp = ""
  var comma = ", "
  if (line.length === 0){
    return "The line is currently empty."
  }
  else{
    for (var i = 0; i < line.length; i++){
      if (i === line.length - 1){
        lineNameTemp = line[i]
        index = i + 1
        lineStringTemp = index + ". " + lineNameTemp
      }
      else {
        lineNameTemp = line[i]
        index = i + 1
        lineStringTemp = index + ". " + lineNameTemp + comma
      }
      lineString = lineString + lineStringTemp
    }
    return "The line is currently: " + lineString
  }
}
