// var katzDeliLine = [];

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return "Welcome, " + name +". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    return "Currently serving " + katzDeliLine.shift() + ".";
  } else{
    return "There is nobody waiting to be served!"
  }
}
//remind dave aboit var i
function currentLine(katzDeliLine){
  if(katzDeliLine.length > 0){
    var current = [];
    var statement = "The line is currently: ";
    for( var i = 0; i < katzDeliLine.length; i++){
      current.push((i+1) + ". " + katzDeliLine[i]);
    }
    return statement + current.join(", ");

  } else {
    return "The line is currently empty.";
  }
}
