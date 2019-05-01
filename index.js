var ticketNumber = 0;

function takeANumber(katzDeliLine, name){
  ticketNumber++;
  katzDeliLine.push([name,ticketNumber]);
  return "Welcome, " + name + ". You are number " + ticketNumber + " in line.";
}
//[[Peter,1], [Sarah,2], [Peter,3]]
function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  var name = katzDeliLine.shift()
  return "Currently serving number " + name[1] + ".";
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }

  var message = "The line is currently: ";

  for (var i = 0; i < katzDeliLine.length; i++) {
    message += (i+1) + ". " + katzDeliLine[i];
    message += (i < katzDeliLine.length -1) ? ", " : "";
  }

  return message;
}
