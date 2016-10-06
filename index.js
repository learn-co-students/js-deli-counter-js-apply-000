function takeANumber(line, name){
  return `Welcome, ${name}. You are number ${line.push(name)} in line.`;
}

function nowServing(line){
  if(line.length){
    return `Currently serving ${line.shift()}.`;
  }
  return "There is nobody waiting to be served!";
}

function currentLine(line){
  if(line.length){
    var lineMembers = line.map(function(name, index){
      return `${index + 1}. ${name}`;
    });
    return "The line is currently: " + lineMembers.join(", ");
  }
  return "The line is currently empty.";
}
