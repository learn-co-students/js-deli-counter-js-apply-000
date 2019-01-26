//I'll have what she's having.

function takeANumber(array,name){
  array.push(name)
  return ("Welcome, " + name + ". You are number " + [array.length] + " in line.")
}

function nowServing(array){
  if (array.length>0) {
  return "Currently serving "+ array.shift() + "."}
  else {return "There is nobody waiting to be served!"}}

function currentLine(array){
  var i = 0
  var lineString = ("The line is currently: "+(i+1)+". "+ array[i])
  function spotInLine(index){return (", "+ (index+1) + ". " + array[index])}
  if (array.length<1) {return "The line is currently empty."}
  else {
    for (let i = 1; i < (array.length); i++) {
      lineString = lineString.concat(spotInLine(i))}
      return lineString}}
  




//This is where you test the functions
//takeaNumber
var katz = []
console.log(
takeANumber(katz,"Harry"))
console.log(
takeANumber(katz,"Sally"))
console.log(
takeANumber(katz,"Carrie Fisher"))
//console.log(nowServing(katz))
//console.log(katz)
//console.log(nowServing(katz))
//console.log(katz)
console.log(currentLine(katz))