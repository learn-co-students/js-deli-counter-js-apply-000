var katzDeli = [];
function takeANumber(katzDeliLine, newName){
  if(typeof newName === 'string'){
    katzDeliLine.push(newName);
  }else if(typeof newName === "object"){
    katzDeliLine.concat(newName);
  }
  return "Welcome, " + newName + ". You are number " + (katzDeliLine.length) + " in line.";
}

function nowServing(katzDeliLine){
  var first = katzDeliLine.shift();
  return katzDeliLine.length === 0 ? "There is nobody waiting to be served!" : "Currently serving " + first + ".";
}

function currentLine(katzDeliLine){
  var arr = [];
  for(var i=0;i<katzDeliLine.length;i++){
    if(i===katzDeliLine.length -1){
      arr.push((i+1)+". "+ katzDeliLine[i]);
    }else{
      arr.push((i+1)+". "+ katzDeliLine[i] + ", ");
    }
  }
  return katzDeliLine.length === 0 ? "The line is currently empty." : "The line is currently: " + arr.join("");
}