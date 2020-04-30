var deliCue = [];

function takeANumber(deliCue, name){
  deliCue.push(name);
  return "Welcome, " + name + ". You are number " + deliCue.length + " in line.";
}

function nowServing(deliCue){
  if (!deliCue.length){
    return "There is nobody waiting to be served!";
  }
  else {
    var name = deliCue[0];
    deliCue.splice(0, 1);
    return "Currently serving " + name + ".";
  }
}

function currentLine(deliCue){
  var line = [];
  let i = 0;
  
  while (i < deliCue.length){
    line.push(``+[i+1]+`. `  +deliCue[i]); 
    i++;
  }
  if (deliCue.length === 0){
    return "The line is currently empty.";
  }
  else {
    return (`The line is currently: ` + line.join(`, `) );
  }

}