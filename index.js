var katzDeli = [];

function takeANumber(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson);
  katzDeli = katzDeliLine.slice(0);
  return "Welcome, " + newPerson + ". You are number " + katzDeli.length + " in line.";
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    var person = katzDeliLine[0];
    katzDeliLine.splice(0, 1);
    katzDeli = katzDeliLine.slice(0);
    return "Currently serving " + person +".";
  }
}

function currentLine(katzDeli){
  if (katzDeli.length === 0){
    return "The line is currently empty."
  } else {
    var currentLineString = "";
    for (var i = 0; i < katzDeli.length; ++i){
      if (i > 0){
        currentLineString +=","
      }

      currentLineString += " " + (i+1) + ". " + katzDeli[i];
    }
    return "The line is currently:" + currentLineString ;
  }
}
