var katzDeli = []
var katzDeliLine = [];
var i=0;
function takeANumber(deli, name){
    var deliAlength=deli.length;
    deli[deliAlength]=name;
    return "Welcome, "+name+". You are number "+(deliAlength+1)+" in line.";
}

function nowServing(line){
  if(line.length>0){
    var msg="Currently serving "+line[0]+".";
      for(i=0;i<line.length-1;i++){
        line[i]=line[i+1]
      }
      line.length=line.length-1;
      return msg;
    }
    else {return "There is nobody waiting to be served!"}
  }

  function currentLine(line){
    if(line.length>0){
      for(i=0;i<line.length;i++){
        line[i]=" "+(i+1)+". "+line[i];
      }
      return "The line is currently:"+line;
    }
    else{return "The line is currently empty."}
  }
