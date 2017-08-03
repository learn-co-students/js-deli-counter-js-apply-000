var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var position = katzDeliLine.length;
  return "Welcome, "+name+". You are number " + position+ " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0)
    return "There is nobody waiting to be served!"
  else {
        var current = katzDeliLine[0];
        katzDeliLine.shift();
        return "Currently serving "+current+"."
    }
  }

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
    var lineIndex = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
      var position = i+1;
      var line = " "+position+". "+katzDeliLine[i];
      lineIndex.push(line)
    }
      var lineString = lineIndex.toString();
      return "The line is currently:"+lineString
  }
}
