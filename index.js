var katzDeliLine = [];

function takeANumber(line, newName){
  var position = line.length + 1;
  var message = "Welcome, " + newName + ". You are number " + position + " in line."
  line.push(newName);
  return message;
}


function nowServing(line){
  if(line.length > 0){
    var person = line[0];
    line.shift(0);
    return "Currently serving " + person + ".";
  } else {
    return "There is nobody waiting to be served!"
  }
}



function currentLine(line){
  var message = "The line is currently:";
  var people = [];

  if(line.length === 0){
    return "The line is currently empty."
  }

  for(var i = 0; i < line.length; i++){
    var position = i + 1;
    var person = " " + position + ". " + line[i];
    people.push(person);
  }

  return message + people.toString();
}


//
// nowServing();
//
// takeANumber(katzDeliLine, "Steven");
//
// nowServing();
//
//
// takeANumber(katzDeliLine, "Bill");
// takeANumber(katzDeliLine, "Jane");
// takeANumber(katzDeliLine, "Ann");
//
// currentLine();
