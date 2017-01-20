var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + (katzDeliLine.indexOf(name) + 1) + " in line.";
}



function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0) {
    return ("Currently serving " + katzDeliLine.shift() + ".");
    } else {
    return ("There is nobody waiting to be served!");
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0){
    function addNum (item){
      return " " + (katzDeliLine.indexOf(item) + 1) + ". " + item;
    }
    return "The line is currently:" + katzDeliLine.map(addNum);
  } else {
    return "The line is currently empty."
  }
}
