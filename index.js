function takeANumber(katzDeliLine, name) {
  if (katzDeliLine.length === 0) {
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number 1 in line.`
  }
  else if (katzDeliLine.length > 0) {
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
  }
}

function nowServing(katsDeliLine) {
  if (katsDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return "Currently serving " + katsDeliLine.shift() + ".";
  }
}

function currentLine(line) {
  let str = "The line is currently: ";
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  else {
    for (let i = 0; i < line.length; i++) {
      // if we are at the end of the array, we remove the comma.
      if (i === line.length - 1) {
        str += `${i + 1}. ${line[i]}`;
      }
      else {
        str += `${i + 1}. ${line[i]}, `;
      }
    }
    return str;
  }
}