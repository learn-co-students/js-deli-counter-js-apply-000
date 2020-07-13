function takeANumber(line, name){
  line.push(name); // adds name(s) to line array  
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line){
  if (line.length === 0){
    return "There is nobody waiting to be served!";
  }
  
  var serving = line[0]; // need this variable to preserve array item we're about to remove
  line.shift(); // removes first item in array
  return `Currently serving ${serving}.`;
}

function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty.";
  }
  
  var status = "The line is currently:"; // if the line is NOT empty
  
  for (let i = 0; i < line.length - 1; i++){ // iterates through people in line EXCEPT the last person
    status = status.concat(` ${i + 1}. ${line[i]},`); // adds each person's number (not index!) and name, plus a comma
  }
  
  status = status.concat(` ${line.length}. ${line[line.length-1]}`); // adds the last person without the comma
  return status;  
}