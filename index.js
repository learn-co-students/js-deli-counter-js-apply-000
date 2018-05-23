function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var positionInLine = katzDeliLine.indexOf(name);
  positionInLine++
  return "Welcome, " + name + ". You are number " + positionInLine + " in line.";
}

function nowServing(katzDeli){
  if (katzDeli.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + katzDeli.shift() + ".";
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  } else {
    var str = "The line is currently: "
    for(var i = 0; i < katzDeliLine.length; i++){
     var placeInLine = i + 1;
     var name = katzDeliLine[i];
      str = str + placeInLine + ". " + name;
      if(i!== katzDeliLine.length - 1 ){
        str = str + ", "
      }
    }
    return str;
  }
}
