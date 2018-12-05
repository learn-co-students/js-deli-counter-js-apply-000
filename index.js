var katzDeliLine = [];
function takeANumber(katzDeliLine, customerName){
  katzDeliLine.push(`${customerName}`);
  return(`Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine){
  if(!katzDeliLine.length){
    return "There is nobody waiting to be served!";
  }
  // for (var i = 0; i < katzDeliLine.length; i++){
  //   if(katzDeliLine.length === 0)
  //   {
  //     return "There is nobody waiting to be served!";
  //   }
  else {
    return(`Currently serving ${katzDeliLine.shift()}.`);
  }
}

var line = [];

function currentLine(katzDeliLine){
  if(!katzDeliLine.length){
    return "The line is currently empty."
  }

  // var line = [];
  for (var i = 0; i < katzDeliLine.length; i++){
    line.push(` `+[i+1]+`. ` + katzDeliLine[i]);

  }
  return (`The line is currently:` + line);
}
