function takeANumber(line, newPName){
  line.push(newPName);
  var message = "Welcome, " + newPName + ". You are number " + line.length + " in line.";
  return message;
}

function nowServing(line){
  if(line.length > 0){
    var now = line[0];
    line.shift();
    message = "Currently serving ";
    return message + now + ".";
  }
  else{
    var message = "There is nobody waiting to be served!"
    return message; 
  }
}

function currentLine(line){
  if(line.length>0){
    var msg = "The line is currently: ";
    for(var i = 0; i<line.length-1; i++){
      msg = msg + (i + 1) + ". " + line[i] + ", ";
    }
    var finalMsg = msg + line.length + ". "+ line[line.length-1];
    return finalMsg;
  }
  else{
    var message = "The line is currently empty."
    return message;
  }
}
