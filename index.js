var katzDeliLine = [ ];


function takeANumber (katzDeliLine, name){
  var length = katzDeliLine.length;
  var line = length + 1
  return "Welcome, " + name + ". You are number " + line + " in line."
  katzDeliLine.push(name);
}

function nowServing (katzDeliLine) {
  var length = katzDeliLine.length;
  var next = '';
  if (length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    next = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + next + ".";
  }
}

function currentLine(line){
  var people = '';

  if (line.length === 0){
    return "The line is currently empty."
  }

  else {
    var partialLine = line.length-1;

    for (var i=0; i< partialLine; i++){
      var place = i + 1;
      people += place + ". " + line[i] + ", "
    }

    for (i=line.length; i=line.length; i++){
      people += place + ". " + line[i]
    }

    var message = "The line is currently: " + people;
    return message;
  }
}
