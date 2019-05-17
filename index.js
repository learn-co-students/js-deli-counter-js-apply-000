function takeANumber (line, name){
  
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
  
}



function nowServing(line){
  
  if(line.length === 0){
    return 'There is nobody waiting to be served!'
  }
  
  let element = line.shift();
  
  return `Currently serving ${element}.`; 
  
}



function currentLine(line){
  
  if(line.length === 0){
    return 'The line is currently empty.'
  }
  
  let words = 'The line is currently: '
  
  for(let i = 0; i < line.length; i++){
    
    if(i === line.length-1){
      let noComa = `${i+1}. ${line[i]}`
      words += noComa; 
    }
    else{
    
    let addOn = `${i+1}. ${line[i]}, `
    words += addOn; 
  
    }
  }
  
  return words; 
}




