var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  console.log("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.");
return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    return  "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
    else  {
      var line = "The line is currently: "

      for (var i = 0; i < katzDeliLine.length; i++){
        line += [i+1] +". "+ katzDeliLine[i] + ", ";
      }
        var returnLine = line.slice(0, line.length-2);
    }
    return returnLine;
}
