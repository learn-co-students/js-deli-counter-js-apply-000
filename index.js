function takeANumber(line,name){
  var x = line.length+1;
  line.push(name);
  var welcome = "Welcome, " + name +". You are number "+ x +" in line.";
  console.log(welcome);
  return welcome;
}

function nowServing (katzDeliLine){
  var i = 0;
  if(katzDeliLine[i] === undefined){
    return  "There is nobody waiting to be served!";
  } 
  else {
    var name = "Currently serving " + katzDeliLine[i]+"."; 
  katzDeliLine.shift(1);
  return name;
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
  for(var i = 0; i < katzDeliLine.length; i++){
    var x = i+1;
    var text = " " + x +". " + katzDeliLine[i];
    katzDeliLine[i] = text;
  }
  return "The line is currently:" + katzDeliLine;
}