const takeANumber = (line, cust) => {
  line.push(cust);
  return `Welcome, ${cust}. You are number ${line.length} in line.`;
}

const nowServing = (line) => {
  if (line.length === 0) return "There is nobody waiting to be served!";
  let serving = line.shift();
  return `Currently serving ${serving}.`;
}

const currentLine = (line) => {
  if (line.length === 0) return "The line is currently empty.";
  let newString = `The line is currently:`;
  for (let i = 0; i < line.length; i++){
    if (i !== line.length-1){
      newString += ` ${i+1}. ${line[i]},`;  
    } else{
      newString += ` ${i+1}. ${line[i]}`; 
    }
  }
  return newString;
}