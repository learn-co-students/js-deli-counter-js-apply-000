function takeANumber(line, name){
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
}

function nowServing(line){
  if(line[0] !== undefined){
    var person = line[0];
    line.shift();
    return "Currently serving " + person + ".";
  }else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line){
  var newArray = [];
  if(line[0] === undefined){
    return "The line is currently empty.";
  }else{
    for(var i = 0; i < line.length; i++){
      var num = i + 1;
      newArray.push(num + ". " + line[i])
    }
  }
  return "The line is currently: " + newArray.join(', ');
}
