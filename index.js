function takeANumber(line, personUp){
  line.push(personUp)
  return (`Welcome, ${personUp}. You are number ${line.length} in line.`); 
}

function nowServing(line){
  if (line.length>0){
    var person = line.shift();
    return `Currently serving ${person}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}


function currentLine(line){
  var lineString = []
  if (line.length === 0){
  return 'The line is currently empty.'
  } else {
    for (var i = 0; i < line.length; i++){
    lineString.push(" " + (i + 1) + `. ${line[i]}`);
    }
  }
  return "The line is currently:" + lineString.toString()
}




  