var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return ("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.");
}

function currentLine(variable) {
  var line = [];
  
  if(variable.length === 0) {
    return ("The line is currently empty.");
  } else {
    for (var i = 0; i < variable.length; i += 1) {
      line += ((i +1) + ". " + variable[i] + ", ");
    }
    line = line.slice(0, line.length-2);
    return ("The line is currently: " + line);
  }
}

function nowServing(variable) {
  if(variable.length === 0) {
    return ("There is nobody waiting to be served!");
  } else {
    var fullName = variable[0];
    variable.splice(0,1);
    return ("Currently serving " + fullName + ".");
  }
}