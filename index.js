var katzDeli = [];
var katzDeliLine = [];


function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var serving = katzDeliLine[0]
    katzDeliLine.shift();
    return "Currently serving " + serving + ".";
  }
}


function currentLine(katzDeliLine) {
  var arry = [];
  var current = "The line is currently:";
  arry.push(current);

  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }

    for (var i = 0; i < katzDeliLine.length; i++) {
      var num = i + 1;

      if (i === katzDeliLine.length - 1) {
        var str = num + ". " + katzDeliLine[i];
        arry.push(str);
      } else {
        var str = num + ". " + katzDeliLine[i] + ","
        arry.push(str);
      }
    }

  return arry.join(" ");
}
