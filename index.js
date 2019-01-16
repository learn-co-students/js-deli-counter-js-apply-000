function takeANumber(line, name){
  line.push(name)
  var welcomeMessage = `Welcome, ${name}. You are number ${line.length} in line.`;
  return welcomeMessage
}

function nowServing(line){
  if (line.length === 0){
    var firstPerson = "There is nobody waiting to be served!";
  }
  else {
    var firstPerson = `Currently serving ${line.shift()}.`;
  }
  return firstPerson
}

function currentLine(line){
  if (line.length === 0){
    var lineReturn = "The line is currently empty."
  }
  else{
    var lineNames = []
    for (var j = 0; j < line.length; j++){
      var name = line[j]
      var counter = j + 1
      var tempVar = " " + counter + ". " + name
      lineNames.push(tempVar)
    }
    var lineReturn = "The line is currently:" + lineNames;
  }
  return lineReturn
}