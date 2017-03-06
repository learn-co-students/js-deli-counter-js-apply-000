var katzDeli = []

var katzDeliline = []


function takeANumber (katzDeliline, name) {

    katzDeliline.push(name)
    var place = katzDeliline.indexOf(name) + 1

    return "Welcome, " + name + ". You are number " + place + " in line."
}

var otherDeli = ["Steven", "Blake", "Avi"]


function nowServing(otherDeli) {

    if (typeof otherDeli[0] == 'undefined'){
        return "There is nobody waiting to be served!"
    }  else {
        return "Currently serving " + otherDeli.shift() + "."
    }
}

var newLine = ["Bill", "Jane", "Ann"]
var line = []

function currentLine(newLine) {
    var y = 0
    var spots = []

    if (newLine.length !== 0){
        do {
            line.push(newLine[y])
            spots.push(y + 1 + ". ")
            y++
        } while (y < newLine.length)

            return "The line is currently: " + spots[0] + line[0] + ", " + spots[1] + line[1] + ", " + spots[2] + line[2]

    }   else {

        return "The line is currently empty."
    }
}
