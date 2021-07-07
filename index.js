var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return 'Welcome, ' + name +'. You are number ' + katzDeliLine.length +' in line.';
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var t = "The line is currently:";
  var line = 1;
  if(katzDeliLine.length > 0) {
    for (var i = 0; i<katzDeliLine.length; i++) {
      t = ""+t + " "+line+". "+katzDeliLine[i];
      line++;
      if(i + 1 < katzDeliLine.length) {
        t = t + ",";
      }
    }
  } else {
    t = "The line is currently empty.";
  }
  return t;
}
