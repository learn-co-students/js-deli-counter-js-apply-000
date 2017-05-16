var katzDeli = [];
var katzDeliLine = [];
var name = [];

var takeANumber = function(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome," + " " + name + ". You are number " + katzDeliLine.length + " in line.";
};

var nowServing = function(katzDeliLine){
  if(katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }else{return "There is nobody waiting to be served!"}
};

var currentLine = function (katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
  var line = []
    var i = -1;
    var spot = i + 2;
      do{line.push(" " + spot + ". " + katzDeliLine.shift(i));
      i += 1;
      spot = spot +1;
    } while (i <= (katzDeliLine.length));
  return "The line is currently:" + line;
}
}
