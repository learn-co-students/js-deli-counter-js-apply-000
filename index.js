function currentLine(line) {

  const numbersAndNames = []

  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }

  return !line.length ? 
            "The line is currently empty."
            : `The line is currently: ${(line.map((e,i) => `${i + 1}. ${e}`)).join(', ')}`;
}

function nowServing(line) {
  let person = line.shift();
  return !person ? 
            "There is nobody waiting to be served!"
            : `Currently serving ${person}.`;
}

function takeANumber(line, name) {
  line.push(name);

  return `Welcome, ${name}. You are number ${line.length} in line.`;
}