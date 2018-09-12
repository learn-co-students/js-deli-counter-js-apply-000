function takeANumber(line,name) {
  line.push(name)
  var length= line.length 
 return (`Welcome, ${name}. You are number ${length} in line.`)
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length>0){
  var line= katzDeliLine.shift();
    return `Currently serving ${line}.`
  }
  else{
   return "There is nobody waiting to be served!"
  }
}
function currentLine (line) {
 if (line.length>0) {
  for (i=0, n=1; line.length>0; i++, n++) {
  return `The line is currently:${n}. ${line[i]},`
   }
  }else{
     return "The line is currently empty."
  } 
}
