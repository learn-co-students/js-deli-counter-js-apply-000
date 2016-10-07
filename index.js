// global variables
var katzDeli = [];

// test 1
var takeANumber = function(katzDeliLine, name){
    katzDeliLine.push(name);
    return "Welcome, " + name + ". You are number " + katzDeliLine.length
     + " in line.";
}

// test 2
var nowServing = function(katzDeliLine){

  // remove first person from line. shift() returns the value of the first index,
  // so I store that value for use in the announcement loop
  var beingServed = katzDeliLine.shift();

  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }else{
    return "Currently serving " + beingServed + ".";
  }

}

var currentLine = function(katzDeliLine){
  var line = '';

  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  }else{
    for(var i = 0; i < katzDeliLine.length; i++){
      line += (i + 1) + ". " + katzDeliLine[i] + ", ";
    }
  }

  // remove the last comma from the line string
  line = line.substring(0, (line.length -2));

  return "The line is currently: " + line;
}
