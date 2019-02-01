function takeANumber(line, name){
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line."
}

function nowServing(line){
  if(isEmpty(line)){
    return "There is nobody waiting to be served!"
  }
  
  return "Currently serving " + line.shift() + ".";
}

function currentLine(line){
  if(isEmpty(line)){
    return "The line is currently empty."
  }
  
  let result = "The line is currently: ";
  
  for(let i = 0; i < line.length; i++){
    result += (i+1) + ". " + line[i] + ", "
  }
  
  //Cut the last comma off and return.
  return result.slice(0, result.length-2)
}

function isEmpty(line){
  return line.length === 0
}