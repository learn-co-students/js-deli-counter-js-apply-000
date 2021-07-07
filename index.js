var katzdeli = [];

function takeANumber(katzdeli, newCust){
  katzdeli.push(newCust);
  var howLong = katzdeli.length;
  return "Welcome, " + newCust + ". You are number " + howLong + " in line.";
}

function nowServing(katzdeli){
  var nowServe = katzdeli.shift()
  if (katzdeli.length < 1){
    return "There is nobody waiting to be served!";
  } else {
      return "Currently serving " + nowServe + ".";
    }
}
function currentLine(katzdeli){
  if (katzdeli.length < 1) return "The line is currently empty.";
  var inLine = [];
  for (var i = 0; i < katzdeli.length; i++){
    var place = i + 1;
    inLine.push(" " + place + ". " + katzdeli[i]);
  }
  var tell = "The line is currently:" + inLine;
  return tell;
}
