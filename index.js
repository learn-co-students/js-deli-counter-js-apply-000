var katzDeli=[];
var otherDeli = ["Steven", "Blake", "Avi"];

function takeANumber(katzDeliLine, newPerson){
  if(newPerson!=null){
    katzDeliLine.push(newPerson);
    var len = katzDeliLine.length<=1 ? 1 : katzDeliLine.length;
   if (newPerson instanceof Array){katzDeliLine.concat(newPerson);  }
  }

  return "Welcome, " + newPerson + ". You are number " + len + " in line.";
}

function nowServing(line){
  var serving = line[0];
  line.shift();
  return serving!=null ? "Currently serving " + serving+"." : "There is nobody waiting to be served!";
}

function currentLine(line){
var len = line.length;
  if(len == 0){
      var returnValue = "The line is currently empty."
  }
  if(len > 0){
    returnValue =  "The line is currently: ";
    for(var i=0; i<len; i++) {
        returnValue = returnValue + (i+1)+". "+line[i] ;
        returnValue = i<(len-1)? returnValue + ", " : returnValue;
    }
  }
  return returnValue;
}
