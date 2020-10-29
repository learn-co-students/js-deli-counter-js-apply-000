function takeANumber(line, name){
  line.push(name)
    return (`Welcome, ${name}. You are number ${line.length} in line.`)
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0){ 
    return (`Currently serving ` + katzDeliLine.shift() + `.`)}
  else {
  return ("There is nobody waiting to be served!")}
}

function currentLine(line) {
  if (line.length > 0) {
    return (`The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`)
  }
  else {
    return ('The line is currently empty.')}
}


function currentLine(line) {
  let output;
  if (line.length === 0) {
    output = `The line is currently empty.`
  }
  else {
    output = `The line is currently: `
    for(let i = 0; i < line.length; i++){
      if (i === 0){
        output = output + (i+1) + `. ` + `${line[i]}`;
      }
      else {
      output = output + `, ` + (i+1) + `. ` + `${line[i]}`;}
  }
  }
  return output
}