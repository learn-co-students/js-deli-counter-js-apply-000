var i = 0
function takeANumber(deliLine, name) {
 deliLine.push(name);
  var deliGreeting = "Welcome, " + name + ". You are number " + deliLine.length + " in line.";
  return deliGreeting;
}

function nowServing (deliLine) {
  
  if (deliLine.length > 0) {
    var servingAnnouncement = "Currently serving " + deliLine[0] + ".";
    deliLine.shift();
    return servingAnnouncement;
  }
  else { 
    return "There is nobody waiting to be served!"}
}

function currentLine(deliLine) {
  var lineList = "";
  
  if(deliLine.length>0){
    for (i=0;i<deliLine.length-1;i++){
      lineList += " " + parseInt(i+1) + ". " + deliLine[i] + ",";
    }
      lineList += " " + parseInt(i+1) + ". " + deliLine[i];
    return "The line is currently:" + lineList;
  }
  else {
    return "The line is currently empty.";
  }
}