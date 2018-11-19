//Return name and line number//
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name); //to tell people their line number//
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}
//Return "serving'line number'". If no one is in the line, return that//
function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
  return (`Currently serving ${katzDeliLine.shift()}.`)
  }
  else {
    return "There is nobody waiting to be served!"
  }
}
//Return the line w/ people waiting <ol>. If empty; return "empty"//
function currentLine(line) {
  if (line.length > 0) {
    var array = []
    for (let i = 0; i < line.length; i++) {
      array.push(` ${i + 1}. ${line[i]}`)
    }
    return "The line is currently:" + array
  } else
    return "The line is currently empty."
}
