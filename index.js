var katzDeliLine=[];
function takeANumber(curLine,NewLine){
  curLine.push(NewLine);
  var mesg= "Welcome,"+" "+ NewLine+". You are number"+" "+curLine.length+" "+"in line.";
  return mesg;
}
function nowServing(katzDeliLine){
  if(!katzDeliLine.length){
    return "There is nobody waiting to be served!";
  }
  else{
    return "Currently serving "+katzDeliLine.shift()+".";
  }
}
function currentLine(noOneInLine){
  if(!noOneInLine.length){
    return "The line is currently empty.";
  }else
  {
    var array=[];
    for(var i=0;i<noOneInLine.length;i++)
    {
      array.push(i+1+". "+noOneInLine[i]);
    }
    return "The line is currently: "+array.join(", ");
  }
}
takeANumber(katzDeliLine,"Ada");
takeANumber(katzDeliLine,"Grace");
takeANumber(katzDeliLine,"Kent");
takeANumber(katzDeliLine,"Matz");
currentLine(katzDeliLine);
nowServing(katzDeliLine);
currentLine(katzDeliLine);