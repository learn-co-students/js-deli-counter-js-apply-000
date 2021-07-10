var katzDeliLine=[];
function takeANumber(katzDeliLine,name) {
    katzDeliLine.push(name);
    return "Welcome, "+name+". You are number "+(katzDeliLine.indexOf(name)+1)+" in line."
}
function nowServing(katzDeliLine){
  if (katzDeliLine[0] != null){
    var name = katzDeliLine[0];
    katzDeliLine.splice(0,1);
    return "Currently serving "+name+".";
  }
  return "There is nobody waiting to be served!"
}
function currentLine(katzDeliLine){
    var str = "The line is currently: ";
    for (var i=0;i<katzDeliLine.length;i++){
      str+=(i+1)+". "+katzDeliLine[i]
      if (i+1<katzDeliLine.length)
        str+=", "
    }
    if (katzDeliLine[0] == null)
      str = "The line is currently empty.";
    return str;
}
