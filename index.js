
function takeANumber(line, new_name){
  line.push(new_name);
  const position = line.indexOf(new_name) + 1;
  return `Welcome, ${new_name}. You are number ${position} in line.`
}


function nowServing(line) {
  
  if(line.length>1){
    const res = line.shift();
   
    return `Currently serving ${res}.`;
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if(line.length===0) return "The line is currently empty.";
  
  let str = [];
  
  for(let i = 0; i < line.length; i++){
    const name = line[i];
    str.push(`${i+1}. ${name}`) 
  }
  return "The line is currently: " + str.join(', ');
}
