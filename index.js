function takeANumber(line, name) {
  line.push(name)
  return  `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if (line <= 0 ) {
    return "There is nobody waiting to be served!"; 

 } 
 return `Currently serving ${line.shift()}.`
  
}

function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty."
  } else {
    var arr = [];
    for (let i = 0; i < line.length; i++ )
    arr.push(`${i + 1}. ${line[i]}`);
  
  }  
  return `The line is currently: ${arr.join(', ')}`
}
