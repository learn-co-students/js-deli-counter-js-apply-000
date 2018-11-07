

function takeANumber(line,name) {
  line.push(name);
  return ("Welcome, "+name+". You are number "+(line.length)+" in line.");
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length===0) {
    return ("There is nobody waiting to be served!");
  } else {
    {
    return ("Currently serving "+katzDeliLine.splice(0,1)+".");
  }
  return katzDeliLine;
  }
}

function currentLine (katzDeliLine) {
  var message=("");
  var i;
  if (katzDeliLine.length===0) {
    return ("The line is currently empty.");
  } else {{
    for (i=0;i<(katzDeliLine.length-1);i++) {
    message+= ((i+1)+". "+katzDeliLine[i]+", ");  
    }
    message = ("The line is currently: "+message);
  } 
   return (message+(i+1)+". "+katzDeliLine[i]);
  }
}
