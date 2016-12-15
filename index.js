var katzDeliLine = [];
var takeANumber = function(katzDeliLine, name){
  katzDeliLine.push(name)
var number = katzDeliLine.length
  return "Welcome, " + name + ". You are number " + number + " in line."
}

var nowServing = function(katzDeliLine){
    if(katzDeliLine.length > 1){
    return "Currently serving " + katzDeliLine.shift() + "."
  }
    else {
    return "There is nobody waiting to be served!"
  }
};

var currentLine = function(katzDeliLine){
    if(katzDeliLine.length === 0){
      return "The line is currently empty."
    }
    else {
      var lineArray = []
      for(var i=0; i < katzDeliLine.length; i++){
        lineArray.push(i + 1 + ". " + katzDeliLine[i])
      }
      return "The line is currently: " + lineArray.join(", ");
    }
};
