var katzDeli = [];

function takeANumber(katzDeli, newPersonsName){
  katzDeli.push(newPersonsName);
  var numInLine = katzDeli.indexOf(newPersonsName) + 1;
  return `Welcome, ${newPersonsName}. You are number ${numInLine} in line.`;
}

function nowServing(katzDeli){
  if (katzDeli.length === 0){
    return "There is nobody waiting to be served!"
  }
  var firstname = katzDeli[0];
  katzDeli.splice(0,1);
  return `Currently serving ${firstname}.`
}

function currentLine(katzDeli){
  if (katzDeli.length === 0){
    return "The line is currently empty."
  }
  var i = 0;
  var finalMessage = "The line is currently:"
  for (i = 0; i < katzDeli.length; i++){
    var num = i + 1
    var additionalName = " "+num.toString() + ". " +katzDeli[i]+",";
    finalMessage = finalMessage + additionalName;
  }
  var messageLength = finalMessage.length - 1;
  finalMessage = finalMessage.slice(0,-1);
  return finalMessage
}
