var deli = [];

function takeANumber(line, name){
  line.push(name);
  var position = line.indexOf(name)+1;
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(line){
  if(line.length){
    return 'Currently serving ' + line.shift() + ".";
  } else return `There is nobody waiting to be served!`
}

function currentLine(line){
  var string = `The line is currently: `;
  if(line.length){
    for(var i = 0; i<line.length; i++){
      if(i === line.length-1){
        string += (i+1) + ". " + line[i];
      } else {
        string += (i+1) + ". " + line[i] + ", ";
      }
    }
  } else return "The line is currently empty.";
  return string;
}
