var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, "+name+". You are number "+(katzDeliLine.length)+" in line.";
}

function nowServing(line){
  if(line.length < 1){
    return "There is nobody waiting to be served!";
  }else{
    return "Currently serving "+line.shift()+".";
  }
}

function currentLine(line){
  var res = "The line is currently";
  if(line.length > 0){
    res+=": ";
  }else{
    res+=" empty.";
    return res;
  }
  var i;
  for(i = 0; i < line.length; i++){
    res+= (i+1)+". "+line[i];
    if(i < line.length -1){
      res+= ", ";
    }
  }
  return res;
}