
const takeANumber = (katzDeliLine, name) => {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}


const nowServing = (line) => {
  return line.length > 0 ? `Currently serving ${line.shift()}.` : "There is nobody waiting to be served!";
}


const currentLine = (line) => {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    let array = [];
    for (let i = 0; i < line.length; i++) {
      array.push(`${i+1}. ${line[i]}`);
    }
    return "The line is currently: " + array.join(', ');
  }
}
