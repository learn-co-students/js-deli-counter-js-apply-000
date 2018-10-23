function takeANumber (line, name){
  
 line.push(name)
  
  return `Welcome, ${name}. You are number ${line.length} in line.`
  
}
function nowServing (line){
  let greeting = ''
  if(line.length){
    greeting =  `Currently serving ${line[0]}.`
    line.shift()
  } else {
    greeting = 'There is nobody waiting to be served!'
  }
  return greeting
}

function currentLine(line){
  let newArr = []
  if(line.length){
    for(let i = 0; i < line.length; i++){
      newArr.push(` ${i + 1}. ${line[i]}` )
    }
      return `The line is currently:${newArr}`;
    
    } else {
      return 'The line is currently empty.'
    
    }



  
  
  
  
  
  
  
}