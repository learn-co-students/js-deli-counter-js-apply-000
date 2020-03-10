var takeANumber = function(katzDeliLine, name) {
  
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
} 

var nowServing = function(katzDeliLine) {
  
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + "."; 
  } else {
    return "There is nobody waiting to be served!";
  }
}

var currentLine = function(katzDeliLine) {

  let People = "";
  
  if (katzDeliLine.length === 0) {
    return"The line is currently empty.";
  }
  
  for (var i =0; i < katzDeliLine.length; i++) {
    if (i === katzDeliLine.length - 1 ) {
      People += (i+1) + ". " + katzDeliLine[i];
    } else {
      People += (i+1) + ". " + katzDeliLine[i] + ", ";
    }
  }
  
  return"The line is currently: " + People;
}