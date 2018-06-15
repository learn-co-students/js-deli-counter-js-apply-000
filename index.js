var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(arr) {
  if (arr.length > 0) {
    var name = arr[0]
    arr.shift();
//  arr.splice(0, 1);
  return "Currently serving " + name + "."
  } else { return "There is nobody waiting to be served!" }
}

function currentLine(arrs) {
  var line = [];
  if (arrs.length > 0) {
     for (var i = 0; i < arrs.length; i++) {
       line += (i + 1) + ". " + arrs[i] + ", "
     }
     line = line.slice(0, line.length-2)
     return "The line is currently: " + line
  } else { return "The line is currently empty."}
}
