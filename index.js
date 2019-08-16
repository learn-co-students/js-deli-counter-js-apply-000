function takeANumber(line, name){
  
  let position = 0;
  let returnString = "Line is currently unavailable."
  
  if(line.length === 0 || !line.includes(name)){line.push(name);}
    
  for(let i = 0; i < line.length; i++){
    if (line[i] === name){returnString = `Welcome, ${name}. You are number ${i+1} in line.`;}
  }
  return returnString;
}

function nowServing(line){
  return (line.length === 0) ? "There is nobody waiting to be served!" : `Currently serving ${line.shift()}.`;
}

function currentLine(line){
  let lineString = "";
  
  if(line.length === 0){
  lineString = "The line is currently empty.";
  }
  else{
    for(let i = 0; i < line.length; i++){
      lineString += (` ${i + 1}. ${line[i]},`);
    }
  lineString =`The line is currently:${lineString.substring(0, lineString.length - 1)}`;
  }
  return lineString;
}
