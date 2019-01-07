var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${(katzDeliLine.length)} in line.`;
}

function nowServing(katzDeliLine){
  if((katzDeliLine.length) != 0){
    var stuff = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
    return stuff;
  }
  else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length != 0){
    var names = [];
    for(var i = 0; i < katzDeliLine.length; i++){
      names.push((i + 1) + ". " + katzDeliLine[i]);
    }
    var stuff = "The line is currently: " + (names.join(", "));
    return stuff;
  }
  else{
    return "The line is currently empty.";
  }
}
