

var katzDeli = [];

function takeANumber (katzDeliLine, name) {

katzDeliLine.push(name);

return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."

}

function nowServing (katzDeliLine) {

if(katzDeliLine.length === 0)

return "There is nobody waiting to be served!"

if(katzDeliLine.length > 0)//if katzDeliLine > 0, true and will execute

return "Currently serving " + katzDeliLine.shift() + "."


}

function currentLine(katzDeliLine){

if(katzDeliLine.length === 0) {

return "The line is currently empty."
}


for (var i=0; i<katzDeliLine.length; i++) {

  var lineNamesAndOrder = [];

  lineNamesAndOrder.push(i+1 + ". " + lineNamesAndOrder[i])


return "The line is currently: " + lineNamesAndOrder

}
