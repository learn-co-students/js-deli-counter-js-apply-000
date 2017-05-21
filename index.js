var katzDeliLine = []
//empty variable
function takeANumber(katzDeliLine, name) {
  //create takeANumber function with parameters
  var position = katzDeliLine.length + 1
  // create variable to hold position info +1 bc js starts at 0
  katzDeliLine.push(name)
  //pushes objects into empty array
return "Welcome, " + name +". You are number " + position +" in line."

}

function nowServing(katzDeliLine) {
var name;
//declare variable
if(katzDeliLine.length == 0){
  return "There is nobody waiting to be served!"
}
name = katzDeliLine.shift()
//defining variable .shift removes 1st item of array
return "Currently serving " + name + "."
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "The line is currently empty."
  }
var myString = []
for(let i=0,l=katzDeliLine.length;i < l; i++){
  //i++ take variable i and add one
  myString.push(` ${i + 1}. ${katzDeliLine[i]}`)
  //push string into an array
}
return ('The line is currently:'+ myString);
}
