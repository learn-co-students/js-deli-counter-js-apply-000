function takeANumber(deli, name) {
  deli.push(name);
  var line = deli.length;
  return "Welcome, " + name + ". You are number " + line + " in line."; 
  return deli;
}

function nowServing(deli) {
  if (deli.length > 0) {
    var text = "Currently serving " + deli[0]+ ".";
    deli.shift();
    return text;  
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) { 
  var text = "The line is currently:";
  
  if (line.length > 0) {
    for (var i=0 ; i < line.length ; i++) {
      text += " "+ (line.indexOf(line[i])+1) + ". " + line[i] +",";  
      if (i === (line.length - 1)) {
        text = text.slice(0,-1)
      }      
    }
    return text;  
        
  } else {
    return "The line is currently empty."
  }
}




