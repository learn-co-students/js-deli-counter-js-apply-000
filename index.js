function takeANumber (line, name) {
  line.push(name)
  return `Welcome, $(name}. You are number ${line.length} in line.`
}

function nowServing(line) {
 return !line.length ? 'There is nobody waiting to be served!' : 'Currently serving ' + line.shift() + '.'
}

 function currentLine(line) {
  let arr=line.map((elem, i) => i+1 +'. ' + elem)
  return !(line.length) ? 'The line is currently empty.' : 'The line is currently: ' + arr.join(', ') 
}
