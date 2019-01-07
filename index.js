function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(line){
  if (line.length===0){
    return 'There is nobody waiting to be served!'
  } else {
    var name = line.shift();
    return `Currently serving ${name}.`
  }
  
}

function currentLine(line){
  if (line.length === 0){
    return 'The line is currently empty.'
  } else {
    var string = "The line is currently:";
    for (var i=0; i<line.length-1;i++){
      string += ` ${i+1}. ${line[i]},`;
    }
    string += ` ${line.length}. ${line[line.length-1]}`;
    return string
  }
}