var katzDeli = [];
var katzDeliLine = [];

function takeANumber (line, name) {
      line.push(name);
    return "Welcome, " + name + ". You are number " + (line.indexOf(name) + 1) + " in line.";
}


function nowServing(line) {
    if(!line[0]){
        return "There is nobody waiting to be served!";
    }else {
       return "Currently serving " + line.splice(0, 1) + ".";
    }
}


function currentLine (line) {
    var newArray = [];
    for (var i = 0; i < line.length; i++){
        newArray[i] = (i + 1) + ". " + line[i];
    }
    if(newArray[0] == null || newArray[0] == "undefined" || newArray[0] == ""){
        return "The line is currently empty.";
    } else {
    return ("The line is currently: " + newArray.join(", "));
    }
}
