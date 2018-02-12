var katzDeliLine = [];

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return ("Welcome, "+name+". You are number "+katzDeliLine.length+" in line.")
}

function nowServing(deliLine){
  if (deliLine.length > 0){
    var nextinline = deliLine[0];
    deliLine.shift();
    return ("Currently serving "+nextinline+".")
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line){
  if (line.length > 0 ){
    var array=[];
    for (var i = 0; i < line.length; i++){
      array.push(i+1 +". "+line[i]);
    }
    var arraywithspace = array.join(", ")
    return "The line is currently: " + arraywithspace
  }
  else{
    return "The line is currently empty."
  }
}
