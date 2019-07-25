const takeANumber = (line, name) => {

  line.push(name);

  return `Welcome, ${name}. You are number ${line.indexOf(name) + 1} in line.`
}

const nowServing = (line) => {

  if (!line.length) return "There is nobody waiting to be served!"

  let first = line.shift();

  return `Currently serving ${first}.`
}


const currentLine = (line) => {

  let str = 'The line is currently:';

  if (!line.length) return "The line is currently empty.";

  line.forEach((val,idx) => str += ` ${idx+1}. ${val},`);

  return str.slice(0,-1)
}
