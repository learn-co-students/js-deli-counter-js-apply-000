function takeANumber(line,name) {
    line.push(name);
    return "Welcome," + " " + name + ". " + "You are number " + line.length + " in line."
}
function nowServing(katzDeliLine) {
    var string = "";
    var array = [];
    if (katzDeliLine.length < 1) {
        return "There is nobody waiting to be served!"
    } else {
        string = "Currently serving" + " " + katzDeliLine[0] + ".";
        katzDeliLine.shift();
        array = katzDeliLine;
        return string;

    }
}
function currentLine(katzDeliLine) {
    var i = 0;
    var j = 1;
    var string = "";
    if (katzDeliLine.length < 1) {
        return "The line is currently empty."
    } else {
        while (i < katzDeliLine.length-1) {
            string = string + j + ". " + katzDeliLine[i] + ", ";
            i++;
            j++;
        }
    }
    return "The line is currently: " + string + j + ". " + katzDeliLine[i];
}
