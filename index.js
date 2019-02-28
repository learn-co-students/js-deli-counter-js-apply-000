function takeANumber(queue,name){
  var x = queue.length+1;
  var text = "Welcome, " + name +". You are number " + x +" in line.";
  queue.push(name)
  console.log("where is ADA",text);
  return text;
}

function nowServing(katzDeliLine){
  var i = 0;
  var x = katzDeliLine[i];
  var text;
  
  if (x === undefined){
    text = "There is nobody waiting to be served!" 
  } else {
    text = "Currently serving " + x + "."
  }
  

  katzDeliLine.shift(1);
  console.log("TEST",text)
  return text;
}


function currentLine(katzDeliLine){
 
 if (katzDeliLine.length === 0){
   return "The line is currently empty." 
 }
 
  var x = katzDeliLine[i];

  for (var i=0; i<katzDeliLine.length; i++){
  var q = i+1;
  var name
  if (q === 1){
    name = "1. " + katzDeliLine[i]
  } else {
  name = " " + q + ". " + katzDeliLine[i];
  }
  katzDeliLine[i] = name;
}

var text = "The line is currently: " + katzDeliLine
  
  console.log("TEST2",text)
  return text;
  
}
  
