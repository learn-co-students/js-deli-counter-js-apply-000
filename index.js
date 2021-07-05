var katzDeliLine = [];

function takeANumber(current, name){
  for (var i = 0; i <= current.length; i++ ){
  current.push(name);
  return `Welcome, ${name}. You are number ${current.length} in line.`
  }
}

function nowServing(patron){
  if (patron.length === 0) {
    return "There is nobody waiting to be served!";
  }
    return `Currently serving ${patron.shift()}.`;

}

function currentLine(line){
  if (line.length === 0) {
    return "The line is currently empty."
  }
    return `The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`
}