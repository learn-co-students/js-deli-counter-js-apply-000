function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if(line.length===0) {
    return "There is nobody waiting to be served!";
  }
  var name = line.shift();
  return `Currently serving ${name}.`;
}

function currentLine(line) {
  if(line.length===0) {
    return "The line is currently empty.";
  }
  
  var resultArray = line.map(function(val, index) {return `${index+1}. ${val}`});
  var result = resultArray.join(", ");
  return `The line is currently: ${result}`;
}