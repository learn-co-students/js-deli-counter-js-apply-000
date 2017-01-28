function takeANumber(katzDeliLine,name){katzDeliLine.push(name)}


function takeANumber(line, newCustomer){
  line.push(newCustomer);
  return "Welcome, " + newCustomer + ". You are number " +
  (line.indexOf(newCustomer) + 1).toString() +" in line.";
}

var currentLine =
function(katzDeliLine){
if(katzDeliLine.length ===
0){
return "The line is currently empty."
}
else {
var lineArray = []
for(var i=0; i <
katzDeliLine.length; i++){
lineArray.push(i + 1 +
". " + katzDeliLine[i])
}
return "The line is currently: " + lineArray.join(", ");
}
};

function nowServing(line) {
  if (!line || line.length === 0)
    return "There is nobody waiting to be served!";
  var customerName = line[0];
  line.shift();
  return "Currently serving " + customerName + ".";
}
