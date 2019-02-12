function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${(line.length)} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return ("There is nobody waiting to be served!")
  } else {
    for (var i = katzDeliLine.length; i > 0; i--) {
      return (`Currently serving ${katzDeliLine.shift()}.`)
    }
  }
}


function currentLine (line) {
  var queue = []
  if (line.length > 0) {
    for (var i = 0; i < line.length; i++) {
      queue.push(`${i +1}. ${line[i]}`);
      }} else { 
        return ("The line is currently empty.")
    }
    return "The line is currently: " + queue.join(`, `)
}