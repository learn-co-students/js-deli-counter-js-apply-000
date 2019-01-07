var katzDeliLine = [];

function takeANumber(line, newName) {
  line.push(newName);
  return `Welcome, ${newName}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  var serving = `Currently serving ${line[0]}.`;
  line.shift();
  return serving;
}

function currentLine(line){
  if (line.length === 0) {
    return "The line is currently empty.";
  } 
  var currentLine = "The line is currently: "
  line.forEach(function(name, ind) {
     currentLine +=`${ind + 1}. ${name}`;
     if (ind !== line.length - 1) {
       currentLine += ', ';
     }
  });
  return currentLine;
}
