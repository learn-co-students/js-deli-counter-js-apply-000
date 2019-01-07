var takeANumber = function(katzDeliLine, name) {
  var line_pos = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + line_pos + " in line."
}

var nowServing = function(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var curr_guest = katzDeliLine.shift();
    return "Currently serving " + curr_guest + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

var currentLine = function(katzDeliLine) {
  var arr = [];
  if (katzDeliLine.length > 0) {
    for (var i = 0; i < katzDeliLine.length; i++) {
      var line_pos = i + 1;
      arr.push(line_pos + ". " + katzDeliLine[i]);
    }
    var s = arr.join(", ");
    return "The line is currently: " + s;
  } else {
    return "The line is currently empty."
  }
}
