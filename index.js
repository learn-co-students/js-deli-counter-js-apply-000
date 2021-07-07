function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length < 1) {
    return "There is nobody waiting to be served!";
  }
  
  let customerName = line.shift();
  return `Currently serving ${customerName}.`;
}

function currentLine(line) {
    if (line.length < 1) {
        return "The line is currently empty.";
    }

    let resultStr = "The line is currently: ";
    
    if (line.length === 1) {
        return (resultStr + `1. ${line[0]}`);
    }

    for (let i = 0; i < line.length - 1; i++) {
        resultStr += `${i + 1}. ${line[i]}, `;
    }

    resultStr += `${line.length}. ${line[line.length - 1]}`;

    return resultStr;
}