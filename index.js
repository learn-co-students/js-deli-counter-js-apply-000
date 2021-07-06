function takeANumber(line, name) {
        line.push(name);
 return `Welcome, ${name}. You are number ${line.length} in line.`;
}
  

function nowServing(line) {
 if (line.length === 0) {
    return `There is nobody waiting to be served!`;
} else {
   var str = line[0]; 
   line.shift(0); 
   return `Currently serving ${str}.`;
}
}


function currentLine(line) {
if (line.length === 0) {
      return `The line is currently empty.`;
} else {
  var newLine = []; 
for (var i = 0; i < line.length; i++) {
      newLine.push(` ${i + 1}. ${line[i]}`);
}
  return (`The line is currently:` + newLine);
}
}

