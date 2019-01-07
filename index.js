let katzDeliLine = [];

function takeANumber(line, name){
  line.push(name);
  let placeInLine = line.length;
  return ("Welcome, " + name + ". You are number " + placeInLine + " in line.")
}

function nowServing(line){
  let serving = line[0];
  if (line.length > 0){
  line.splice(0, 1);
  return "Currently serving " + serving + "." 
} else {
  return "There is nobody waiting to be served!"
}

}

function currentLine(line){
  let lineArray = [];
  if (line.length == 0){
    return "The line is currently empty."
  }
  else {
    for (let i = 0; i < line.length; i++){
      lineArray.push(" " + (i + 1)  + ". " + line[i])
    }
  }
  return "The line is currently:" + lineArray.join()
}