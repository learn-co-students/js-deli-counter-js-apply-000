
function takeANumber(queue, name){
  queue[queue.length] = name;
  return "Welcome, "+name+". You are number "+queue.length+ " in line.";
}

function nowServing(queue){
  if(queue.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving "+queue.shift()+".";
  }
}

function currentLine(queue){
  if(queue.length === 0){
    return "The line is currently empty."
  } else {
    var result = "The line is currently: "
    for(var i = 0; i < queue.length; i++){
      if(i != 0){
        result += ", "
      }
      result += i+1+". "+ queue[i];
    }
    return result;
  }
}
