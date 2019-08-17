var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
}


function nowServing(katzDeliLine) { // does this function return a single person? or the string "currently serving"?
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  }
return 'Currently serving ' + katzDeliLine.shift() + '.';
}



function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) return "The line is currently empty.";

    var deliLine = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
      var num = i + 1;
        deliLine.push(' ' + num + '. ' + katzDeliLine[i]);
    }

  return 'The line is currently:' + deliLine.join(",");
}