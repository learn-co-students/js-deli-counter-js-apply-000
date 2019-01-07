var katzDeli = [];

function takeANumber(katzDeliLine, guest) {
  katzDeliLine.push(guest);
  return "Welcome, " + guest + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzline) {
  if (katzline.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    var guest = katzline.shift ();
    return "Currently serving " + guest + ".";
  }
}

function currentLine(line){
  if (line.length === 0 ){
    return "The line is currently empty.";
  }
  else {
    var out = [];
    line.forEach(function(person, index){
      out.push((index + 1) + ". " + person);
    });
    return "The line is currently: " + out.join(", ");
  }
}
