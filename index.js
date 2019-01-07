var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var placeInLine = katzDeliLine.indexOf(name) + 1;
  var string = "Welcome, " + name + ". You are number " + placeInLine + " in line."
  return string;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length == 0){
    return "There is nobody waiting to be served!";
  } else {
    var str = "Currently serving " + katzDeliLine[0] + ".";
    katzDeliLine.shift();
    return str;
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length == 0){
    return "The line is currently empty."
  } else {
    var str = "The line is currently: "
    for (var i = 0; i < katzDeliLine.length; i++){
      var placeInLine = i + 1;
      str += placeInLine + ". " + katzDeliLine[i]
      if (placeInLine != katzDeliLine.length){
        str += ", "
      }
    }
    return str;
  }
}
