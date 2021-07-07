function takeANumber(line, name){
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
}

function nowServing(line){
  if (line.length === 0){
    return "There is nobody waiting to be served!";
  }
  return "Currently serving " + line.shift() + ".";
}

function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty."
  }
  var sentence = "The line is currently: ";
  for(var i = 0; i < line.length; i++) {
    if(i === line.length - 1)
      sentence += (i+1) + ". " + line[i];
    else
      sentence += (i+1) + ". " + line[i] + ', ';
  }
  return sentence;
}
