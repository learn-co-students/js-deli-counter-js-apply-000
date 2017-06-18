var katzDeli = [];
var takeANumber = function(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

var nowServing = function(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    var curCustomer = katzDeliLine[0];
    katzDeliLine.shift(1, );
    return `Currently serving ${curCustomer}.`;
  }
}

var currentLine = function(katzDeliLine) {

  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  } else {
    var retStr = "The line is currently:"
    for(var i=0; i<katzDeliLine.length-1; i++){
      retStr += ` ${i+1}. ${katzDeliLine[i]},`
    }
    retStr += ` ${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length-1]}`
    return retStr;
  }
}
