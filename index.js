function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  var position = (katzDeli.indexOf(name)) + 1;
  return "Welcome, " + name + "." + " You are number " + position + " in line."
}


function nowServing(katzDeliLine) {
 if (katzDeliLine.length === 0) {
   return "There is nobody waiting to be served!"
 } else {
   return "Currently serving " +  katzDeliLine.shift(name) + "."
 }
}


function currentLine(katzDeliLine) {
 
 var array = [];
 var i = 0;
 
if (katzDeliLine.length === 0) {
  return "The line is currently empty."
} else 

for (i = 0; i < katzDeliLine.length; i++)
array.push(` `+ [i+1]+". " + katzDeliLine[i])

return ("The line is currently:" + array)
}



