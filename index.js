function takeANumber(line, name){
  line.push(name);
  return "Welcome, " + name + ". " + "You are number " + line.length + " in line.";
}

function nowServing(line){
  var currentlyServing;
  if (line.length > 0){
    currentlyServing = line[0];
    line.splice(0,1);
    return "Currently serving " + currentlyServing + ".";
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line){
  var printLine = ""
  if (line === undefined){
    return "What is a line?";
  }
  else if (line.length > 0){
   for(var i = 0; i < line.length; i++){
   printLine += i + 1 + '. ' + line[i];
     if (i !== line.length - 1){
     printLine += ', ';
     }
   }
    return "The line is currently: " + printLine;
  }
  else {
    return "The line is currently empty.";
  }
}
