function takeANumber(array, name){
  array.push(name);
  var greeting = "Welcome, " + name + ". You are number " + (array.length) + " in line.";
  return greeting;
}

function nowServing(line){
  if (line.length > 0){
    var firstName = line[0];
    line.shift();
    return "Currently serving " + firstName + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line){
  var names = [];
  var start = "The line is currently: "
  if (line.length == 0){
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < line.length; i++){
      var eachName = (i + 1) + '. ' + line[i]
      names.push(' ' + eachName);
      names[0]= names[0].trim();
    }
    return start + names;
  }
}
