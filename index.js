function takeANumber(thisLine, newName) {
  thisLine.push(newName)
  var x = thisLine.indexOf(newName) + 1
  return "Welcome, " + newName + ". You are number " + x + " in line."
}

takeANumber(katzDeli, 'Ada')
takeANumber(otherDeli, 'Grace')


function nowServing(deliLine) {
  if(deliLine.length!==0) {
    return "Currently serving " + deliLine.shift() + "."
  } else {
    return "There is nobody waiting to be served!"
  }
}

const line = ["Bill", "Jane", "Ann"]

function currentLine(line) {
    if(line.length!==0) {
        for(var i=0; i<line.length; i++) {
        var x = i + 1;
        line[i] = " " + x + ". " + line[i];
        };
        return "The line is currently:" + line;
    } else {
        return "The line is currently empty.";
    }
}
