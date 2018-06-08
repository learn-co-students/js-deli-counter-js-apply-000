let katzDeli=[]
function takeANumber (line, name) {
  line.push(name)
  return 'Welcome, ' + name +'.' + ' You are number ' + line.length + ' in line.'
}

function nowServing(line) {
  if(!line.length) return 'There is nobody waiting to be served!'
  return 'Currently serving ' + line.shift() + '.'
}

 function currentLine(line) {
  let arr=line.map((elem, i) => i+1 +'. ' + elem)
  return !(line.length) ? 'The line is currently empty.' : 'The line is currently: ' + arr.join(', ') 
}
