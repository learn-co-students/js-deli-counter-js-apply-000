function takeANumber (cLOP, newPN){
cLOP.push(newPN);
  var welcomeMessage = "Welcome, " + newPN + ". You are number " + cLOP.length + " in line."
  return welcomeMessage;
}

function nowServing(cLOP){
  var firstPerson=cLOP[0];
  cLOP.shift();
  if (cLOP.length === 0){return "There is nobody waiting to be served!"}
  else{return "Currently serving " + firstPerson + "."};
}

function currentLine(cLOP){
var finalString = "The line is currently: "
  for (var i=0; i<cLOP.length; i++){
    if (cLOP.length-1===i){
      finalString += (i+1) + ". " + cLOP[i]
    }
    else {finalString += (i+1) + ". " + cLOP[i] + ", "}
}
if(cLOP.length === 0){
  return "The line is currently empty."
}
return finalString;
}
