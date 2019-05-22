
function takeANumber(katzDeli, name) {
  var lineNumber = katzDeli.length + 1;
  var message = "Welcome, " + name +". You are number " + lineNumber +" in line.";
  katzDeli.push(name);
  return message;
}

function nowServing(katzDeli) {
  var announce;
  if (katzDeli.length === 0){
    announce = "There is nobody waiting to be served!";
  }
  else {
    announce = "Currently serving " + katzDeli[0] +".";
    katzDeli.shift();
  }
  return announce;
}

function currentLine(katzDeli) {
  var message;
  if(katzDeli.length === 0) {
    message = "The line is currently empty.";
  }
  else{
    message = "The line is currently: ";
    for(var i = 0; i < katzDeli.length; i++){
      if (i===0){
      message = message + (i+1) +". " + katzDeli[i];
    }
    else{
      message = message + ", " + (i+1) +". " + katzDeli[i];
    }
    }  
  }
  return message;
}


  