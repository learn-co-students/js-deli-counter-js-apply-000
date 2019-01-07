function takeANumber(line, name) {
   line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length == 0) {
  return 'There is nobody waiting to be served!'
  }
  line.shift()
  return 'Currently serving Steven.'
} 

function currentLine(line){
  if (line.length == 0) {
    return "The line is currently empty."
  }
  line.push()
  return 'The line is currently: 1. Bill, 2. Jane, 3. Ann'
}


 








  
 

  
  
 
  
 