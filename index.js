function takeANumber(line,name){
  line.push(name);
  var position = line.length;
  return `Welcome, ${name}. You are number ${position} in line.`; 
}

function nowServing(line){
  if (line.length === 0){
    return "There is nobody waiting to be served!";
  }
  var name = line.shift();
  return `Currently serving ${name}.`;
}

function currentLine(line){
  var output = 'The line is currently:';
  if (line.length === 0){
    return 'The line is currently empty.';
  }
  for (var i = 0; i < line.length; i++){
    var position = i + 1;
    var name = line[i];
    output += ` ${position}. ${name},`;
  }
  return output.slice(0,-1);
}