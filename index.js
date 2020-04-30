function takeANumber (line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing (katzDeliLine) {
  return (katzDeliLine.length === 0) ? "There is nobody waiting to be served!" : `Currently serving ${katzDeliLine.shift()}.`;
}

function currentLine (queue) {
  if (queue.length === 0) {
    return "The line is currently empty.";
  }
  else {
    let lineArray = [];
    for (let i = 0; i < queue.length; i++) {
      lineArray.push(`${i + 1}. ${queue[i]}`);
    }
    return `The line is currently: ${lineArray.join(", ")}`;
  }
}