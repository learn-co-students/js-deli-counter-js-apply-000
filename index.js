function takeANumber(line, person){
  line.push(person);
  let welcome = "Welcome, " + person + ". You are number " + line.length + " in line.";
  return welcome;
}

function nowServing(line){
  if (line.length === 0) 
    return "There is nobody waiting to be served!";
  line.reverse();
  let currentPerson = line.pop();
  line.reverse();
  return "Currently serving " + currentPerson + ".";
}

function currentLine(line){
  if (line.length === 0) 
    return "The line is currently empty.";
  let output = "The line is currently: ";
  for (let i=0 ; i<line.length ; i++){
    if (i === line.length-1)
      output += (i+1) + ". " + line[i];
    else
      output += (i+1) + ". " + line[i] + ", ";
  }
  return output;
}