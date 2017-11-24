var katzDeli = [];
var otherDeli =["Steven", "Blake", "Avi"];

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


