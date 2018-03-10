var katzDeli=[];
function takeANumber(katzDeliLine,name){
katzDeliLine.push(name);
var position= katzDeliLine.length;
return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(katzDeliLine){
var guestNow="";
if(katzDeliLine.length< 1){
  return "There is nobody waiting to be served!";
}else{
  guestNow=katzDeliLine[0];
  katzDeliLine.shift();
}
return `Currently serving ${guestNow}.`;
}

function currentLine(katzDeliLine){
var numLine=[];
if(katzDeliLine.length<1){
  return "The line is currently empty.";
}else{
  for(var i =0; i<katzDeliLine.length;i++){
    var place=i+1;
    if(place<katzDeliLine.length){
    numLine.push(place+". "+ katzDeliLine[i]+", ");
  }else{
    numLine.push(place+". "+ katzDeliLine[i]);
  }
}
}
var list=numLine.join("");
return `The line is currently: ${list}`;
}
