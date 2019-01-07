var katzDeli  = [];
var numLine = 0;

function takeANumber(katzDeliLine, name){
  numLine++;
  katzDeliLine.push(numLine);
    return (`You are number ${numLine}.);
}

function  nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    return ("Currently serving " +katzDeliLine.splice(0, 1) + ".");
    }
}

function  currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0){
    return ("The line is currently empty.");
  } else {
      var numName = [];
      for(var i = 0; i < katzDeliLine.length; i++ ){
        numName.push( (i + 1) + ". " + katzDeliLine[i]);
      }
    return ("The line is currently: " + numName.join(", "));
     }
}




