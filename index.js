



function takeANumber(currentLine, name){
var placeInLine = currentLine.length + 1;
var message = "Welcome, "  + name +". You are number "  + placeInLine + " in line.";
currentLine.push(name);
return message;
}




function nowServing(currentLine){
var message;
if (currentLine.length === 0){
message = "There is nobody waiting to be served!"
}
else{
message = "Currently serving " + currentLine[0] +".";
currentLine.shift();
}
return message;
}





function currentLine(line){
var message;
if (line.length === 0){
message = "The line is currently empty."
}
else{
message = "The line is currently: "
for(var i = 0; i < line.length ; i++){
if (i === 0){

message = message + (i+1) + ". " + line[i];
}
else{
message= message + ", " + (i+1) + ". " + line[i];
}
}
}
return message;
}