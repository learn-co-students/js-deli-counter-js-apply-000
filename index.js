//add elements to an array
//return itmes to an array
//iterate through an array
//pass an array as a function parameter

//at the start of a day the counter starts at empty
var katzDeli = []
//[[name , number], [name , number], [name , number]]

function takeANumber(katzDeliLine, name){
    katzDeliLine.push(name);
    return "Welcome, " + name + ". You are number " + (katzDeliLine.indexOf(name) + 1) + " in line."
}

function nowServing(katzDeliLine){
    if (katzDeliLine.length > 0){
    return 'Currently serving ' + katzDeliLine.shift() + '.'
    } else {
        return "There is nobody waiting to be served!"
    }
}

function currentLine(katzDeliLine){
    if (katzDeliLine.length > 0){
        var output =  'The line is currently: ';
        for(var i = 0; i < katzDeliLine.length; i++) {
            output += (i + 1) + '. ' + katzDeliLine[i]
            if (i != katzDeliLine.length - 1){
                output += ', '
            }
        }
        return output
    } else {
        return 'The line is currently empty.'
    }

}
