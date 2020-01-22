function takeANumber(line,name){
  var length = line.length + 1;
  line.push(name);
  return "Welcome, "+name+". You are number "+ length +" in line.";
}

function nowServing(line){
  if (line.length === 0){
    return "There is nobody waiting to be served!";
  }
  return "Currently serving " + line.shift() +".";
}

function currentLine(line){
  if (line.length===0){
    return 'The line is currently empty.';
  }
  var current = "";
  for (var i = 0; i<line.length; i++){
    if (i===line.length-1){
       current += i+1 + ". "+line[i];
    }
    else{
    current += i+1 + ". "+line[i]+", ";
  }
  }
  return "The line is currently: "+current;
}