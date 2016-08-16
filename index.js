var katzDeli = [];

function takeANumber(line, name){
  katzDeli = line
  katzDeli.push(name)
  return "Welcome, " + name + ". You are number " + katzDeli.length + " in line."
}

function nowServing(line){
  katzDeli = line
  if(katzDeli.length === 0){
    return "There is nobody waiting to be served!"
  }
  else return "Currently serving " + katzDeli.shift() + "."
}

function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty."
  }
  else
  var output = []
  for(var i=1; i<=line.length; i++){
    output.push(" " + i + ". " + line[i-1])
  }

  return "The line is currently:" + output.join()
}
