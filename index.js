function takeANumber(line, name){
  line.push(name);
  return "Welcome, " + name + ". You are number " + (line.indexOf(name)+1) + " in line.";
  }

function nowServing(line){
  if (line.length === 0)
    return "There is nobody waiting to be served!";
  else{
    return "Currently serving " + line.shift() + ".";
  }
}

function currentLine(line){
  var returnList = "The line is currently: ";
  var i = 0;
  
  if (line.length === 0)
    return "The line is currently empty.";
  
  do{
     returnList += (i + 1) + ". " + line[i] + ", ";
     i += 1;
  }
  while (i < line.length - 1);
  
  returnList += (i + 1) + ". " + line[i];

  return returnList;
}
