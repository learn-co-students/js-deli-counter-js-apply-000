var katzDeli = [];

function takeANumber(line, name){
  line.push(name);
  var linePlace = line.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${linePlace} in line.`;
}

function nowServing(line){
  var youreUp = line.shift();
  if(youreUp === undefined){
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${youreUp}.`
  }
}

function currentLine(line){
  var butcher = "The line is currently:";
  for(var i = 0; i < line.length; i++){
      butcher+= ` ${i + 1}. ${line[i]}`
      if(i !== line.length-1) {
        butcher += ","
      }
  }
  if(i === 0) {
    butcher = "The line is currently empty."
  }
  return butcher;
}
