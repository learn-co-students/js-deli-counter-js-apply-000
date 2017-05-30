var katzDeli = ["Ada","William","Jim","Grace"];

function takeANumber(line,person) {
  for (var index = 0; index<line.length; index++) {
    if (line[index] == person) 
     var position = index + 1;
  }
    else {
      var position = null;
    }
    return "Welcome, " + line[index] + ". You are number " + String(position) + " in line.";
}
function nowServing() {
  var firstPerson = null
  if (katzDeli[0])
    firstPerson = katzDeli[0];
    katzDeli.shift();
  if (!firstPerson) {
    return "There is nobody to be served!";
  }
  else {
    return firstPerson;
  }
}

function currentLine() {
  var intro = 'The line is currently: ';
  for (var i = 0; i < katzDeli.length; i++) {
    intro += String(i) + '. ' + katzDeli[i] + ', ';
  }
  return intro;
}