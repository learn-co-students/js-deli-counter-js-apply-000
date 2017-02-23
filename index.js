var katzDeliLine = [];

function takeANumber(katzDeliLine, names){
  if(names != ''){
    katzDeliLine.push(names);
  }
  return `Welcome, ${katzDeliLine[katzDeliLine.length -1]}. You are number ${katzDeliLine.length} in line.`;
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  }else{
    var curServe = 'The line is currently:';
      for(var size = 0; size < katzDeliLine.length; size++){
          curServe += ` ${size + 1}. ${katzDeliLine[size]}`;
          if(size != katzDeliLine.length -1){
              curServe += ",";
          }
      }
    return curServe;
  }
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length != 0)
  {
    var now = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${now}.`;
  }else{
    return "There is nobody waiting to be served!";
  }
}
