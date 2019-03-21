function takeANumber(line, name){
  var line_length=line.length;
  var number=line_length+1;
  line.push(name);
  return `Welcome, ${name}. You are number ${number} in line.`;
}

function nowServing(line){
  if(line.length===0){
    return "There is nobody waiting to be served!";
  }else{
    var cur_person=line[0];
    line.shift();
    return `Currently serving ${cur_person}.`;
  }
}

function currentLine(line){
  if(line.length===0){
    return "The line is currently empty.";
  }else{
    var cur_line_txt="The line is currently: ";
    for(var i=0;i<line.length;i++){
      if(i<line.length-1){
        cur_line_txt+=(i+1)+". "+line[i]+", ";
      }else{
        cur_line_txt+=(i+1)+". "+line[i];
      }
    }
    return cur_line_txt;
  }
}