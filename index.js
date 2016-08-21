var takeANumber = function(currentLine, name){
currentLine.push(name);
  return "Welcome, "+name+". You are number "+(currentLine.indexOf(name)+1)+" in line.";
}
 var nowServing = function(currentLine){
   if(currentLine.length>0){
     return "Currently serving "+currentLine.shift()+".";
   } else {
     return "There is nobody waiting to be served!"
   }
 }

var currentLine = function(a){
  if(a.length>0){
    var numNames=""
    for(var i=0; i<a.length; i++){
      var numNames = numNames+(i+1)+". "+a[i]+", ";
    }
    var foo = numNames.substring(0, numNames.length - 2);
    return "The line is currently: "+foo;
} else {
    return "The line is currently empty.";
  }
}
