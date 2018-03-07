var katzDeliLine =[]
function takeANumber(katzDeliLine, name){
  var line = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return 'Welcome, ' + name +'. You are number ' + line + ' in line.'
}

function nowServing(line){
  var name;
  if(line == 0){
    return "There is nobody waiting to be served!"
  } 
    name = line.shift()
    return "Currently serving " + name + "."
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length == 0){
    return "The line is currently empty."
  } else {
    var str = "The line is currently: " + "1. " + katzDeliLine[0]
    for (var i = 1; i<katzDeliLine.length; i++){
      str += ", " + (i+1) + ". " + katzDeliLine[i] 
    }
  }
  return str
}