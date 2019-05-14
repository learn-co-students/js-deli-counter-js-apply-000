function takeANumber(katzDelizLine, name){
  var num = katzDelizLine.push(name);
  return "Welcome, " + name + ". You are number " + num + " in line."
}

function nowServing(katzDelizLine){
  if(katzDelizLine === undefined || katzDelizLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + katzDelizLine.shift() + "."
  } 
}

function currentLine(line) {
    if(line === undefined || line.length === 0){
    return "The line is currently empty."
  } else {
    var newLine = []
    line.forEach(function (i) {
      var num = line.indexOf(i) + 1;
      newLine.push(num + ". " + i)
      }); var inLine= newLine.join(", ")
    } return "The line is currently: " + inLine
}