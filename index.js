var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  
  katzDeliLine.push(name);
  var position = katzDeliLine.length;
  var msg = "Welcome, " + name + ". You are number " + position + " in line.";
  return msg;
}

function nowServing(katzDeliLine) {
  var msg = "";
  if (katzDeliLine.length ===0) {
     msg = "There is nobody waiting to be served!";
    return msg;
  }
  else {
     msg = "Currently serving " + katzDeliLine[0] +".";
     katzDeliLine.shift();
     return msg;
  }
}

function currentLine(katzDeliLine) {
  var msg = "";
  if (katzDeliLine.length === 0) {
    msg = "The line is currently empty.";
  }
  else {
    var pos;
    var stradd = "";
    msg = "The line is currently: ";
    for (var i = 0; i<katzDeliLine.length; i++){
      pos = i+1;
      if (i==(katzDeliLine.length-1)){
              stradd = pos + ". " +  katzDeliLine[i];
      console.log(stradd);
      msg = msg.concat(stradd);
      }
      else {
      stradd = pos + ". " +  katzDeliLine[i] + ", ";
      console.log(stradd);
      msg = msg.concat(stradd);
      }
    }
  }
  return msg;
}

