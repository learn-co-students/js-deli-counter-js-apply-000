let takeANumber = (current, name) => {
  current.push(name);
  return "Welcome, " + name + ". You are number " + (current.length) +" in line.";
}

let nowServing = (line) => {
  if(line.length == 0){
    return "There is nobody waiting to be served!";
  }
  
  let first = line.shift();
  return "Currently serving " + first +".";
}

let currentLine = (line) => {
  if(line.length == 0){
    return "The line is currently empty.";
  }
  
  let string = "The line is currently: ";
  
  for(let i = 0; i < line.length; i++){
    string += (i+1) +". " + line[i];
    if(i!=line.length-1)
      string += ", ";
  }
  
  return string;
}