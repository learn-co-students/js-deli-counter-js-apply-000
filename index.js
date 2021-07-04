function takeANumber(line,name) {
let i = 0;
let le;
if (line.length === 0) {
  line.push(name)
  return `Welcome, ${name}. You are number ${i+1} in line.`;
}
else if (line.length > 0){
  le = line.length;
  line.push(name);
  return `Welcome, ${name}. You are number ${le + 1} in line.`;
}
}

function nowServing(line){

if (line.length === 0) {
  return "There is nobody waiting to be served!";
}

else if (line.length > 0) {
  var toBeserved = line[0];
  line.shift();
  return `Currently serving ${toBeserved}.`
}
}

function currentLine(line) {
  
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  else if (line.length > 0) {
    var fullLine = [];
    for (let i =  0; i < line.length; i++){
      fullLine.push(` ${i+1}. ${line[i]}`)
    }

    return "The line is currently:" + fullLine;
  }
}



