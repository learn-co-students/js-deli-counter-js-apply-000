function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}
function nowServing(katzDeliLine){
   if (katzDeliLine.length >= 1){
     return "Currently serving " + katzDeliLine.shift() + ".";
   }
   else {
     return "There is nobody waiting to be served!";
   }
} 
function currentLine(katzDeliLine){
  var array = [];
  var string = "The line is currently: " ;
  if (katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
  else {
    for (var i = 0; i < katzDeliLine.length; i++) {
     string += i + 1 + ". "+ katzDeliLine[i] + ", ";
    }
    return string.substring(0, string.length-2);
  }
}      