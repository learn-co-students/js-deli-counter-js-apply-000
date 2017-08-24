
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.");
}

function nowServing(person) {
  var result = [];
  if (!person.length) {
    return ("There is nobody waiting to be served!");
  } else{
    var name = person[0];
    person.splice(0,1);
    return ("Currently serving " + name + ".");
  }
}

function currentLine(line) {
  var result = [];
  if(!line.length) {
    return("The line is currently empty.");
  } else {
  for(var i = 0; i < line.length; i += 1) {
    result += ((i + 1) + ". "  +  line[i] + ", ");
  }
  result = result.slice(0,result.length-2);
  }
  return ("The line is currently: " + result);
}
