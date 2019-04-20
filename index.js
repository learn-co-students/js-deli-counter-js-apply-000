function takeANumber(line,name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}
function nowServing(line) {
  if(line.length>0) {
    return `Currently serving ${line.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}
function currentLine(line) {
  if(line.length<1) {
    return "The line is currently empty."
  }
      
    var str="The line is currently:"
    var n
    for(n=0;n<line.length;n++) {
      str+=` ${n+1}. ${line[n]}`
      if(n!=line.length-1) {str+=','}
    }
  return str
}