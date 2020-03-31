function takeANumber(currentLine,name){
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
}
function nowServing(currentLine){
  if(currentLine.length===0){
    return 'There is nobody waiting to be served!';
  }
  else{
    const name = currentLine[0];
    
    currentLine.shift();
    return `Currently serving ${name}.`;
  }
}

function currentLine(line){
  let str = 'The line is currently'
  if(line.length===0){
    str+=' empty.'
    return str;
  }
  else{
    str+=':';
    for(let i=0;i<line.length;i+=1){
      str+=` ${i+1}. ${line[i]}`;
      if(i!==line.length-1){
        str+=',';
      }
    }
    return str;
  }
}