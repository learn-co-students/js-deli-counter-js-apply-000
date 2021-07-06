//Adds new name to the line and then returns their name and position 
function takeANumber(line, name) {
  
  line.push(name);
  
  return "Welcome, " + name + ". You are number " + line.length +" in line.";
  
}


//Returns the number currently being served unless there is no one waiting
function nowServing(line) {
  
  if(line.length < 1){
    return "There is nobody waiting to be served!";
  } else {
    var next = line[0];
    line.shift();
    return 'Currently serving ' + next + '.';
  }
  
}

//Returns the current line with name and position unless it is empty
function currentLine(line) {
  
  if(line.length < 1){
    return "The line is currently empty.";
  }
  
  const lineList = [];
  
  for(let n=0; n<line.length; n++){
    lineList.push((n+1) + ". " +  line[n]);
  }
  
  return 'The line is currently: ' + lineList.join(', ');
}








