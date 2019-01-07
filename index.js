var katzDeli = [];
var otherDeli =["Bill", "Jane", "Ann"];

function takeANumber(x,y){
  x.push(y);
  return "Welcome, " + (y) + ". You are number " + (x.indexOf(y)+1) +" in line.";
}

takeANumber(katzDeli,"Ada");

function nowServing(x){
  if (x.length===0) {
    return "There is nobody waiting to be served!";
  }
  var last=x.length;
  var notice= "Currently serving " + x[0] +"."; 
    x.splice(0,1);
  return notice;
}

nowServing(otherDeli);

function currentLine(x){
  if (x.length===0) {
    return "The line is currently empty.";
  }
  return "The line is currently: 1. "+x[0]+", 2. "+x[1]+", 3. "+x[2];
}

currentLine(otherDeli);




