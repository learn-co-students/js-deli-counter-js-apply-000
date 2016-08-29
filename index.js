function takeANumber(deli, name) {
  deli.push(name);
  var line = deli.length;
  return "Welcome, " + name + ". You are number " + line + " in line."; 
  return deli;
}

function nowServing(deli) {
  if (deli.length > 0) {
    return "Currently serving " + deli[0]+ ".";  
    deli.splice(0, 1);
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  
  
}