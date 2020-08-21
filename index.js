function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return "Welcome, " + name + "." + " You are number "
  + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    return "Currently serving " + katzDeliLine.shift() + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  var checkInList = [ ];
  if (katzDeliLine.length > 0){
    for (var i = 0; i < katzDeliLine.length; i++){
      checkInList.push(i+1 + ". " + katzDeliLine[i]);
    } return "The line is currently: " + checkInList.join(", ");
    } else {
      return "The line is currently empty.";
  }
}