var katzDeliLine = [];
var takeANumber = function(katzDeliLine, name){
katzDeliLine.push(name);
  return "Welcome, " + name +  ". You are number " + (katzDeliLine.indexOf(name)+1) + " in line.";
};

var nowServing = function(katzDeliLine){
 if (katzDeliLine.length === 0) {
   return "There is nobody waiting to be served!";
 } else {
   var current_line = "Currently serving " + katzDeliLine[0] + ".";
   katzDeliLine.shift();
   return current_line;

 }
};

var currentLine = function(katzDeliLine){

 if(katzDeliLine.length===0){
   return "The line is currently empty.";
 }

   var existing_line = "";

   for (var i = 0; i < katzDeliLine.length; i++){
     var existing_person = katzDeliLine[i];
     existing_line += " " + (i + 1) + ". " + existing_person;

   if (i < katzDeliLine.length - 1) {
existing_line += ",";
   }

}
return "The line is currently:" + existing_line;
 };




takeANumber(katzDeliLine, "Grace"); // 2
takeANumber(katzDeliLine, "Kent"); // 3

currentLine(katzDeliLine); // "The line is currently: 1. Ada 2. Grace 3. Kent"

nowServing(katzDeliLine); // "Currently serving Ada."

currentLine(katzDeliLine); // "The line is currently: 1. Grace 2. Kent"

takeANumber(katzDeliLine, "Matz"); // "3"

currentLine(katzDeliLine); // "The line is currently: 1. Grace 2. Kent 3. Matz"

nowServing(katzDeliLine); // "Currently serving Grace."

currentLine(katzDeliLine); // "The line is currently: 1. Kent 2. Matz"
