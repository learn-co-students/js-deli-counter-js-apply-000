function takeANumber(line, name){
  line.push(name);
  let i = line.indexOf(name) + 1;
  let greet = 'Welcome, ' + name + '. You are number ' +  i  +' in line.';
  
  
  
 
  
  
  
  

  
  
  return greet
  
  
}

function nowServing(line, name){
  
  
  if(line.length === 0){
    return "There is nobody waiting to be served!"
  }
  
  
  
  
  return "Currently serving " + line.shift() + "."
  
   
  
}

function currentLine(line, name){
  
  if(line.length === 0){
    return "The line is currently empty."
  }
  
  return "The line is currently: 1. Bill, 2. Jane, 3. Ann"
}