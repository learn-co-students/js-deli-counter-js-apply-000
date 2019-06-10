//var katzDeliLine = [];

function takeANumber(katzDeliLine,name)
{
  var next = katzDeliLine.length;
  katzDeliLine[next] = name;
  var string1 = "Welcome, "+name+". You are number "+(next + 1 )+" in line.";
  return string1; 
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0 ){
    return "The line is currently empty.";
  }
  var string1 = "The line is currently: ";
  for(var i = 0; i < katzDeliLine.length; i++){
    string1+=(i+1)+". "+katzDeliLine[i];
    if(i!=katzDeliLine.length-1){
      string1 += ", ";
    }
  }
  return string1;
} 

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0 ){
    return "There is nobody waiting to be served!";
  }
  else{
    var string1 = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving "+string1+".";
  }
}