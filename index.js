
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + (katzDeliLine.indexOf(name) + 1) + " " + "in line.";
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(arr) {
  var str = [];
  if(arr.length >= 1) {
    for(var i = 0; i < arr.length; i++) {
      str.push(i + 1 + ". " + arr[i]);
    }
    for(var i = 1; i < str.length; i++) {
      str[i] = " " + str[i];
    }
    return "The line is currently: " + str;
  }
  else {
    return "The line is currently empty.";
  }
}
