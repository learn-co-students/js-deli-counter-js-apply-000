function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  var position = katzDeliLine.indexOf(name) + 1
  var queue = "Welcome, " + name + ". You are number " + position + " in line."
  return queue
}

function nowServing(deliLine){
  if (deliLine == undefined || deliLine.length == 0) {
    return "There is nobody waiting to be served!"  
    } else {
      var next_person = deliLine[0]
      deliLine.shift()
      return "Currently serving " + next_person + "."
      }
}

function currentLine(line) {

  var modified_line = []
  var i = 0
  
  if (line == undefined || line.length == 0) {
    return "The line is currently empty."  
    } else {
      while (i < line.length) {
        modified_line[i] = (i+1) + ". " + line[i]
        i++
      }
      return "The line is currently: " + modified_line.join(", ")
    }
}