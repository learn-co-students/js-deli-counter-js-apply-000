var katzDeliLine = [];


function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
   var index = katzDeliLine.indexOf(name) + 1;
}
  return "Welcome, " + name + ". You are number " + index + " in line."
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    var servedName = katzDeliLine.shift();
  }
  return "Currently serving " + servedName + "." 
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty."
  }else{
    var newArr = [];
    for(var i = 0; i < katzDeliLine.length; i++){
      var ele = katzDeliLine[i];
      var pushEle = (i + 1) + ". " + ele;
      newArr.push(pushEle);
    }
    return "The line is currently: " + newArr.join(", ");
  }
}