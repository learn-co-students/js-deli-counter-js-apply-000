var katzDeli = [];

var takeANumber = function(katzDeli, newName) {
  katzDeli.push(newName);
  return "Welcome, " + newName + ". You are number "+ katzDeli.length + " in line.";
}


var nowServing = function(katzDeli) {
  if (katzDeli[0]===undefined){
    return "There is nobody waiting to be served!"
  }
  else if (katzDeli.length >0) {
    var currentCustomer = katzDeli[0];
          katzDeli.shift();
   return `Currently serving ${currentCustomer}.`;

 }
}

var currentLine = function(line) {
  if (line.length !==0) {
    for(var i=0; i<line.length;i++) {
      line[i] = " "+(i+1)+". " + line[i];
    }
    return `The line is currently:${line}`;
  }
  else  {
        return "The line is currently empty."
  }
}
