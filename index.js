function takeANumber(deliLine, name){
  deliLine.push(name);
  return "Welcome," + " " + name + ". You are number" + " " + deliLine.length + " " + "in line."
}

function nowServing(deliLine){
  var serving = deliLine[0]
  if(deliLine.length == 0){
    return "There is nobody waiting to be served!"
  }else{
    deliLine.splice(0,1);
    return "Currently serving" + " " + serving + ".";
  }
  
}

function currentLine(deliLine){
  var i;
  var line = "The line is currently: "

  if(deliLine.length == 0){
    return "The line is currently empty."
  }else{
    for(i = 0; i< deliLine.length; i++){
      line = line + (i + 1) + "." + " " + deliLine[i] + ", "
    }
  }
  line = line.substr(0, line.length-2);
  return line
}