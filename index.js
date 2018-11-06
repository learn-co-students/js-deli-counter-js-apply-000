var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var place = katzDeliLine.indexOf(name)+1;
  return "Welcome, " + name + ". " + "You are number " + place + " in line."
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length == 0){
    return "There is nobody waiting to be served!"
  } else return "Currently serving " + katzDeliLine.shift() + ".";
}

function currentLine(katzDeliLine){
  var line = `The line is currently: `;
  if(katzDeliLine.length != 0){
    for(var i = 0; i<katzDeliLine.length; i++){
      if(i === katzDeliLine.length-1){
        line += (i+1) + ". " + katzDeliLine[i];
      } else {
        line += (i+1) + ". " + katzDeliLine[i] + ", ";
      }
    }
  } else return "The line is currently empty.";
  return line;
}
