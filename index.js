function takeANumber (line,name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing (line) {
  let phrase; 
  if(line.length === 0) {
    phrase =  "There is nobody waiting to be served!"
  } else {
    phrase = `Currently serving ${line[0]}.`;
    line.shift();
    }
  return phrase 
}

function currentLine (line) {
  let phrase; 
  if (line.length === 0) {
    phrase = "The line is currently empty."
  } else {
    let newA = line.map(name => ` ${line.indexOf(name)+1}. ${name}`);
    let addPhrase = newA.toString();
    phrase = `The line is currently:${addPhrase}`
  }
  return phrase 
}




