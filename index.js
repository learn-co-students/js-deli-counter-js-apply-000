function takeANumber(queue,name) {
  queue.push(name);
  var msg = "Welcome, " + name + ". You are number " + queue.length + " in line.";
  return msg;
}

function nowServing(queue) {
  if (queue.length === 0) {
    const emptyQ = "There is nobody waiting to be served!";
    return emptyQ;
  }
  else {
    return "Currently serving " + queue.shift() + ".";
  }
}

function currentLine(queue) {
  if (queue.length === 0) {
    const emptyQ = "The line is currently empty.";
    return emptyQ;
  }
  else {
    var cLine = "The line is currently:";
    var i = 0;
    while (queue[i]) {
      var app = " " + (i+1) +". " + queue[i] + ",";
      cLine = cLine + app;
      i++
    }
    cLine = cLine.substring(0, cLine.length-1);
    return cLine;
  }
}