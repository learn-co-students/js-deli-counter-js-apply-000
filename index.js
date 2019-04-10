function takeANumber(lineNumber,name){
  lineNumber.push(name);
  return `Welcome, ${name}. You are number ${lineNumber.length} in line.`;
}

function nowServing(lineNumber){
  if (lineNumber.length === 0){
    return "There is nobody waiting to be served!";
  }
  else{
    return `Currently serving ${lineNumber.shift()}.`;
  }
}

function currentLine(lineNumber){
  var line = "The line is currently: ";
  
  if (lineNumber.length === 0){
    return "The line is currently empty.";
  }
  else{
    for (let i = 0; i < lineNumber.length-1; i ++){
      line = line + `${i+1}. ${lineNumber[i]}, `;
    }  
  }return line + `${lineNumber.length}. ${lineNumber.splice(-1)}`;
}


