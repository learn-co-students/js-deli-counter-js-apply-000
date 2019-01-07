var katzDeli = [];

function currentLine(x) {
  
  if(x.length === 0) {
    return "The line is currently empty.";
  }
  
  var line = [];
    for(var i = 0; i < x.length; i++){
      line.push((i+1) + ". " + x[i]);
    }
    return "The line is currently: " + line.join(", ");
}

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return "Welcome, " + name + ". You are number "
  + katzDeli.length + " in line.";
}

function nowServing(x) {
  if(x.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + x.shift() + ".";
  }
}
