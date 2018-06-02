var takeANumber = function(katzDeliLine, name){
  katzDeliLine.push(name);
  
  var position = katzDeliLine.indexOf(name) + 1;
  return "Welcome, " + name + ". You are number " + position + " in line."
}

var nowServing = function(katzDeliLine, name){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else { 
    var currently = katzDeliLine.shift();
    return "Currently serving " + currently +".";
      }
 }
 
 var currentLine = function(katzDeliLine){
   if (katzDeliLine.length === 0){
     return "The line is currently empty.";
   }
   else {
     var lineClone = katzDeliLine.slice();
     for (var i = 0; i < lineClone.length; i++){
         lineClone[i] = (i + 1) + ". " + lineClone [i];
     }
     var result = lineClone.join(", ");
    return "The line is currently: " + result;
   }
 }