var katzDeli = [];
function takeANumber(line, name){
  line.push(name);
  return "Welcome, " + name + ". You are number " + (line.indexOf(name)+1) + " in line."

}

function nowServing(line){
  if(line.length > 0){
    return "Currently serving " + line.shift() + ".";
  }
  else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line){
  var arr = []
  if (line.length > 0){
    for(var i = 0; i < line.length; i++){
      arr.push((i + 1) + ". " + line[i])
    }
    return "The line is currently: " + arr.join(", ")
  }
  else {
    return "The line is currently empty."
  }
}
