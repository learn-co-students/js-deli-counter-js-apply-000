var num = [];

function takeANumber(myDeliLine, name) {
  myDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + myDeliLine.length + " in line.";
}

function nowServing(nowServ) {
  if(nowServ.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    var name = nowServ[0]
    nowServ.splice(0, 1);
    return "Currently serving " + name + ".";
  }
}

function currentLine(num){
  if(num.length === 0) {
    return "The line is currently empty.";
  } 
  
  else {
      var custLine = [];
    for (var i = 0; i < num.length; i++){ 
      custLine += (i + 1) + ". " + num[i] + ", ";
    }
      custLine = custLine.slice(0, custLine.length-2);
    return "The line is currently: " + custLine;
  }
}

takeANumber("Ada");
takeANumber("Grace");
takeANumber("Kent");