function takeANumber(deliLine, name){
  deliLine.push(name);
  let position = deliLine.length; 
  return "Welcome, " + name +". You are number " + position + " in line."
}

function nowServing(deliLine){
  if(deliLine.length === 0){
    return "There is nobody waiting to be served!"
  }else {
    var serving = deliLine.shift();
    return "Currently serving " + serving + "."
  }
}

function currentLine(deliLine){
  var current = '';
  if(deliLine.length===0){
    return "The line is currently empty."
  }else{
    for(let i = 0; i<deliLine.length; i++){
    current += i+1;
    current += ". "
    current += deliLine[i];
    if(i<deliLine.length-1) current += ", ";
    }
  
  }
return "The line is currently: " + current
}