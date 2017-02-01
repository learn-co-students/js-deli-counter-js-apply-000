function takeANumber(line, name){
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
}

function nowServing(line){
  if(line.length === 0){
    return "There is nobody waiting to be served!"
  }
  return "Currently serving " + line.shift() + ".";
}

function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty."
  }
  var string = "The line is currently: ";
  var i = 0;
  var num;
  for(i = 0; i<line.length-1; i++){
    num = i + 1;
    var string = string + num + ". " + line[i] + ", "
  }
  num = i + 1;
  string = string + num + ". " + line[i];
  return string;
}
