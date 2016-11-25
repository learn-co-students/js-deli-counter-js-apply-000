function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var num = katzDeliLine.indexOf(name) + 1;
  return "Welcome, " + name + ". You are number " + num + " in line.";
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    var s1 = "Currently serving " + katzDeliLine[0] + ".";
    katzDeliLine.shift();
    return s1;
  }
  else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line){
  if (line.length > 0){
    var s = "The line is currently: ";
    for (var x = 0; x<line.length; x++){
      if (x+1 === line.length){
        s += (x+1).toString() + ". " + line[x];
      }
      else{
        s += (x+1).toString() + ". " + line[x] + ", ";
      }
    }
    return s;
  }
  else{
    return "The line is currently empty.";
  }
}
