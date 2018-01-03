function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`;
}

function nowServing(line) {
  if(line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line) {
  if(line.length === 0) {
    return "The line is currently empty.";
  } else {
    let positions = "The line is currently: "
    for(var i = 0; i < line.length; i++) {
      positions += `${i + 1}. ${line[i]}`;
      if(i < line.length - 1) {
        positions += ", ";
      }
    }
    return positions;
  }
}
