function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${line.shift()}.`;
}

function currentLine(line) {
  let announce = "The line is currently";
  if (line.length === 0) {
    return (announce += " empty.");
  }
  else {
    announce += ":";
    
    for (let i = 0; i < line.length; i++) {
      announce += ` ${i + 1}. ${line[i]}`;
      if (i != line.length - 1) { announce += ","; }
    }
  }
  return announce;
}