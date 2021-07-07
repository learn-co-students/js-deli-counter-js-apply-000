var katzDeli = [];

const takeANumber = function(katzDeliLine, name) {
  katzDeliLine.push(name);
  
  console.log("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.");
  
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
  
} 


const nowServing = function(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    console.log("There is nobody waiting to be served!");
    return "There is nobody waiting to be served!";
  } else {
    var name = katzDeliLine[0];
    katzDeliLine.splice(0,1);
    console.log("Currently serving " + name + ".");
    return "Currently serving " + name + ".";
  }
}


const currentLine = function(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  var lineArray = [];
  
  for (var i = 0; i < katzDeliLine.length; i++) {
    lineArray.push(i+1 + ". " + katzDeliLine[i]);
  }
  console.log("The line is currently: " + lineArray);
  return "The line is currently: " + lineArray.join(', ');
}