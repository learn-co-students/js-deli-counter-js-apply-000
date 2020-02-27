function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) return "There is nobody waiting to be served!"
  else {
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line) {
  if (line.length === 0) return "The line is currently empty."
  else {
    let msg = "The line is currently:";
    for (let i=0; i<line.length; i++) {
      msg += ` ${i+1}. ${line[i]},`
    }
    msg = msg.slice(0, -1);
    return msg;
  }
}