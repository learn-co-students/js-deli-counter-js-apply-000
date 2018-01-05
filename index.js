function takeANumber(deli, name) {
deli.push(name)
return "Welcome, " + `${name}` + ". You are number " + (deli.indexOf(name) + 1) + " in line." 
}
function nowServing(line) {
if (line.length === 0) { return "There is nobody waiting to be served!" }
else { return "Currently serving " + line.shift() + "." } }

function currentLine(line) {
  var array = []
  for (var i = 0; i < line.length; i++) 
 { if (i === 0) {array.push( "The line is currently: 1. " + line[i]) }
else {array.push((line.indexOf(line[i]) + 1) + ". " + line[i]) }}
if (array.length === 0) { return "The line is currently empty." }
else {
var fine = array.join(", ")
return fine }}