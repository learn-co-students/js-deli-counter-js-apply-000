function takeANumber(currentLine,name){
  currentLine.push(name);
return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
}

function nowServing(currentLine){
  if(currentLine.length==0){
    return "There is nobody waiting to be served!";
  }
  else{ return `Currently serving ${currentLine.shift()}.`
    }
}
function currentLine(line){
  var newline=[];
  if(line.length==0){
    return "The line is currently empty.";
  }
  else{
    for (var i=0; i<line.length; i++){
      newline.push(`${i+1}. ${line[i]}`);
    }
    return `The line is currently: ${newline.join(", ")}`;
  }
}
