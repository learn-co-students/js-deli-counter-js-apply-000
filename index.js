function takeANumber(deli, name) {
  deli.push(name);
  return "Welcome, " + `${name}` + ". You are number " + deli.length + " in line.";
}

function nowServing(deli) {
  if (deli.length >= 1) {
    var ret = "Currently serving " + deli[0] + ".";
    deli.shift();
    return ret;
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(deli) {
  if (deli.length >= 1) {
    var order = [];
    for (let i = deli.length; i >= 1; i--) {
      order.unshift(" " + i + ". " + deli[i-1])
    }
    return "The line is currently:" + order;
  }
  else {
    return "The line is currently empty.";
  }
}
