var katzDeli = [];

var takeANumber = function(katzDeliLine,name){
  katzDeliLine.push(name);
var  n = katzDeliLine.indexOf(name) + 1;
  return "Welcome, " + name + ". You are number " + n + " in line.";
};

var nowServing = function(katzDeliLine,name){
  if(katzDeliLine.length > 0){
    return "Currently serving " + katzDeliLine.shift() + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
};

var currentLine= function(line){
  if(line.length > 0){
    var thisLine = [];
    for(var i = 0;i < line.length;i++){
      var n = i+1;
      thisLine.push( n + ". " + line[i]);
    }
    return "The line is currently: " + thisLine.join(", ");
  } else {
    return "The line is currently empty.";
  }
};
