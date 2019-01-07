function takeANumber(katzDeliLine, name){
    var pos = katzDeliLine.length+1; //stores the persons spot in line adding 1 since count starst at zero
    katzDeliLine.push(name)
    return "Welcome, " + name + ". You are number " + pos + " in line."
}

function nowServing(deliLine){
    var name;

    if(deliLine.length == 0){//checks to see if the length is zero in the line
    return "There is nobody waiting to be served!"
}

name = deliLine.shift() //removes the item from the list and returns it
return "Currently serving "+ name + "."
}


function currentLine(katzDeliLine){
    if(katzDeliLine.length == 0){//checks to see if no one is in line
    return "The line is currently empty."
}

var newString = `The line is currently: 1. ${katzDeliLine[0]}` //`` and ${} used for operations in a string

for (var i = 1; i<katzDeliLine.length; i++){
    newString += `, ${i+1}. ${katzDeliLine[i]}`//incraments the value of i in my string
}

 return newString

}