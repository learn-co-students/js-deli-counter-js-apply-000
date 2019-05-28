function takeANumber(line,name) {
  line.push(name)
  var text = "Welcome, " + name + "." + " You are number " + (line.length) + " in line."
  return text
}
function nowServing(katzDeliLine) {
  var sntnc
  if (katzDeliLine.length === 0) {
   sntnc = "There is nobody waiting to be served!" 
  }
  else {
   var whoever  = katzDeliLine[0]
  katzDeliLine.splice(0, 1)
  sntnc = "Currently serving " + whoever + "."
  }
  return sntnc
}
function currentLine(line) {
  var sntnc
  if (line.length === 0) {
    sntnc = "The line is currently empty."
  }
  else {
    sntnc = "The line is currently: "
    for (var i = 0; i < line.length; i++) {
      sntnc += (i+1) + ". " + line[i] 
      if (i < line.length - 1) { sntnc += ", "}
    }
  }
  return sntnc 
}
