function takeANumber(currentLine, name) {
  var position = currentLine.length + 1;
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(line) {
  if(line.length > 0){
    var firstPerson = line[0];
    line.shift();
    return `Currently serving ${firstPerson}.`;
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if(line.length > 0){
    // var lineStatus = "The line is currently:";
    
    // for(var i = 0; i < line.length; i++) {
    //   lineStatus += ` ${i+1}. ${line[i]}`
    //   if(i < line.length-1) {
    //     lineStatus += ",";
    //   }
    // }
    
    var lineStatus = "The line is currently: ";
    
    for(var i = 0; i < line.length -1; i++) {
      lineStatus += `${i+1}. ${line[i]}, `
    }
    lineStatus += `${line.length}. ${line[line.length-1]}`;
    
    return lineStatus;
  } else {
    return "The line is currently empty.";
  }
}