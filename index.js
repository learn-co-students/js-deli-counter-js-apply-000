
function takeANumber(line, name){
   line.push(name)
    return `Welcome, ${name}. You are number ${line.length} in line.`
}

/* the function is called nowServing
  the parameter (line) is being passed into the function
  return first person in line (begining of the line)
  remove that individual from the line (shift)
  if there is nobody in line (if, else)
  return "There is nobody waiting to be served!" */

function nowServing(line){
  
  if  (line.length === 0){
  
  return 'There is nobody waiting to be served!'
  }
    else {
  return `Currently serving ${line.shift()}.`
  }

}

/* function name is currentLine
    passing current line of people (line) into func
    return current line as a string "The line is currently: 1. , 2. ,3."
    if line is empty, return "The line is currently empty."
*/


function currentLine(line){
  if (line.length === 0){
  return 'The line is currently empty.'
  } else {
    let output = 'The line is currently: '
    for(var i = 0; i < line.length; i++){
      output += `${i+1}. ${line[i]}, `
    }
    return output.slice(0)
  }
}