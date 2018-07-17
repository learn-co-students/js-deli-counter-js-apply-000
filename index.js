var katzDeliLine = []

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.");
}

function nowServing(katzDeliLine){
   var firstPerson = [];
  if (katzDeliLine.length < 1) {
    return 'There is nobody waiting to be served!';
  } else {
    firstPerson.push(katzDeliLine[0]);
    katzDeliLine.shift();
    return 'Currently serving ' + firstPerson[0] + '.';
  }
}

function currentLine(katzDeliLine){
    if (katzDeliLine.length===0){
    return "The line is currently empty.";
  }
  else {
  var results = [];
  for(var i=0; i < katzDeliLine.length; i++){
    results. push(parseInt([i]) + 1 +'. '+ katzDeliLine[i]);
  }
  return "The line is currently: " + results.join(', ');
  }
}

