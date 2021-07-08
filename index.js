function takeANumber(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.indexOf(name)+1} in line.`;
}

function nowServing(line){
  if (line.length==0){
    return "There is nobody waiting to be served!";
  }else{
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line){
  if (line.length==0){
    return "The line is currently empty.";
  }
  var returnString="The line is currently: ";
  for (let i=0; i<line.length; i++){
    returnString=returnString+`${i+1}. ${line[i]}, `
  }
  return returnString.slice(0, -2);
}
