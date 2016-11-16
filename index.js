var katzDeliLine =[];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " +name+"."+" You are number "+katzDeliLine.length+" in line.";
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length>0){
    var next = katzDeliLine.shift();
    return "Currently serving "+next+".";
  } else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length>0){
    var string="The line is currently:";
    for (var i=0; i<katzDeliLine.length; i++){
       string+=" "+(i+1)+". "+katzDeliLine[i]+",";
    }
      string=string.substring(0,string.length-1);
      return string;
  }else{
    return "The line is currently empty.";
  }
}
