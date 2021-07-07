
function takeANumber(line, name){
  line.push(name);
  return "Welcome, " + name +". You are number "+ line.length + " in line."
}

function nowServing(line){
  if(line.length > 0){
    var string = "Currently serving " + line.shift() + ".";
    return string;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(name){
  var string = "The line is currently: ";
  if(name.length > 0){
  for(var i = 0; i < name.length ; i++){
    string += (i + 1) + ". " + name[i];
    if (i < (name.length -1))
    string += ", "
    
  }
  } else {
    string = "The line is currently empty."
  }
  return string;
}
