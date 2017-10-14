function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  var num = katzDeliLine.length
  return `Welcome, ${newName}. You are number ${num} in line.`
}

function nowServing(katzDeliLine) {
  var length = katzDeliLine.length
  if(length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    var person = katzDeliLine.shift()
    return `Currently serving ${person}.`
  }
}

function currentLine(katzDeliLine) {
  var length = katzDeliLine.length
  var statement = "The line is currently: "
  if(length == 0) {
    return "The line is currently empty."
  } else {
    for (var i = 0; i < length; i++) {
      statement += `${i + 1}. ${katzDeliLine[i]}, `
    }
    return statement.substring(0, statement.length-2);
  }
}
