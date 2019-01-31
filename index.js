function takeANumber(katzDeliLine, name) {
katzDeliLine.push(name);
  return "Welcome, "+ name +". You are number "+ katzDeliLine.length +" in line.";
}

function nowServing(katzDeliLine){
if(katzDeliLine.length > 0){
  var nowServing = katzDeliLine.shift();
  return "Currently serving " + nowServing + ".";
}
  return "There is nobody waiting to be served!";
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length < 1)
  return "The line is currently empty."
else{
    var line = [];
    for (var i = 0; i < katzDeliLine.length; i++){
    line.push(` ${i + 1}. ${katzDeliLine[i]}`);
    	}
    }
  return "The line is currently:" + line;
}
