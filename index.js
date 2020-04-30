
function takeANumber(line,name){

if (line.length===0){
  line.unshift(name)
  var position= line.length

}
  else{
    line.push(name)
    var position= line.length


  }
  return "Welcome, "+name+". You are number "+ position +" in line.";
}

function nowServing(line){
  if(line.length===0){
    return "There is nobody waiting to be served!";
  }
  else{
    var person= line[0];
    line.shift()
    return "Currently serving " +person+".";
  }
}

function currentLine(line){
  var message=""
  var position=1
  var separator="";

  if(line.length===0){
    return "The line is currently empty."
  }
  else{
    var lenArray= line.length;
    for(let i=0; i<lenArray; i++){
      if(i===lenArray-1){
        separator="";
      }
      else{
        separator=", ";
    }
      message += position+ ". " + line[i]+ separator;
      position++;
    }
    return "The line is currently: "+ message;
  }
}
