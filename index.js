function takeANumber(line, name) {
  return `Welcome, ${name}. You are number ${line.push(name)} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line) {
  let out = "The line is currently";
  if (line.length === 0) {
    out += " empty.";
  } else {
    out += ":";
    for (let i = 0; i < line.length; i++) {
      out += ` ${i + 1}. ${line[i]},`;
    }
    out = out.slice(0, out.length - 1);
  }
  return out;
}