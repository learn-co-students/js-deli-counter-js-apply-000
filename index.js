function takeANumber(queue, name){
  queue.push(name)
  return "Welcome, " + name + ". You are number " + (queue.length) + " in line."
}

function nowServing(queue){
  if (queue.length === 0){
    return "There is nobody waiting to be served!"
  }
  return "Currently serving " + queue.shift() + "."
}

function currentLine(queue){
  var startStr = "The line is currently"

  if (queue.length == 0){
    return startStr + " empty."
  }

  startStr = startStr + ": "
  for (var i=0; i<queue.length;i++){
    startStr = startStr + (i+1) + ". " + queue[i] +", "
  }
  var sliced = startStr.slice(0,-2) //removes last comma, < adding if statement
  return sliced
}
