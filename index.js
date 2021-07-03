var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  katzDeli = katzDeliLine;
  return "Welcome, " + name + ". You are number " + [katzDeli.indexOf(name)+1] + " in line.";
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length < 1){
    return "There is nobody waiting to be served!"
  } else {
    var servingCustomer = katzDeliLine.shift();
    return "Currently serving " + servingCustomer +".";
  }
}

function currentLine(line){
  if(line.length < 1){
    return "The line is currently empty."
  } else {
    var list = "";
    for(var i = 0; i < line.length; i++ ){
        if (i == line.length-1){
          list += [i+1]+". "+line[i];
      } else {
          list += [i+1]+". "+line[i] + ", ";
      }
    }
      return "The line is currently: " + list;
  }
}





