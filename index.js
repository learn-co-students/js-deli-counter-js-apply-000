function takeANumber(lineArray, name){
  lineArray.push(name);
  return `Welcome, ${name}. You are number ${lineArray.length} in line.`
  
}

function nowServing(lineArray){
  if (lineArray.length === 0){
    return 'There is nobody waiting to be served!'
  }
  let person = lineArray.shift();
  return `Currently serving ${person}.`;
 
}

function currentLine(lineArray){
  if (lineArray.length === 0){
    return 'The line is currently empty.'
  }
  let waitArray = [];
   for (let i=0; i < lineArray.length; i++){
     
      waitArray.push(` ${i+1}. ${lineArray[i]}`);
   }
   return 'The line is currently:' + waitArray
  
}