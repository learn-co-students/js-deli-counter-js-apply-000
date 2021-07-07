

var katzDeli = [];

function takeANumber (DeliLine, name) {

  for(var i = 0; i<=DeliLine.length;i++) {

  DeliLine.push(name);


  return "Welcome, " + name + ". You are number " + DeliLine.length +  " in line."
  }
}


function currentLine(DeliLine) {
  //To Iterate over array I created a new array.
var newArray = [];

if (!DeliLine.length) {
  return "The line is currently empty."
}

else for(var i = 0; i<DeliLine.length;i++) {

newArray.push(`${i+1}. ${DeliLine[i]}`)
}

return "The line is currently: " + newArray.join(", ")

}

function nowServing (DeliLine) {

  //If length is 0, !DeliLine.length will be True and execute.
  if (!DeliLine.length) {
    return "There is nobody waiting to be served!"
  }
  else return "Currently serving " + DeliLine.shift() + "."
  //Removes first person from line.
}
