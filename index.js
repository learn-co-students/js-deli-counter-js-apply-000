function takeANumber(currentLine, name) {
    currentLine.push(name);
    return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}

function nowServing(currentLine) {
    if (currentLine.length > 0)
        return "Currently serving " + currentLine.shift() + ".";
    else
        return "There is nobody waiting to be served!";
}

function currentLine(currentLine) {
    let output = "The line is currently";
    if (currentLine.length === 0)
        output += " empty.";
    else {
      output += ': ';
      currentLine.forEach((val, index) => {
        output += `${index + 1}. ${val}`;
        if (index !== currentLine.length - 1)
          output += `, `;
      });
    }
    return output;
}