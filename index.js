function takeANumber(line, newPerson) {
  
  line.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${line.length} in line.`;
  
}

function nowServing(line) {
 
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    let firstPerson = line[0];
    line.shift();
    return `Currently serving ${firstPerson}.`;
  }
  
}

function currentLine(line) {
  
  let str = "The line is currently";
  
  if (line.length === 0) {
    
    return str + " empty.";
    
  } else {
    
    str += ": ";

    for (let i = 0; i < line.length; i++) {
      
      str += `${i+1}. ${line[i]}`;
      
      if (i !== line.length - 1) {
        str += ", ";
      }
    }
    
    return str;
  }
  
}