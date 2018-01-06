

function takeANumber(array, name){
  array.push(name);
  return "Welcome, " + name + ". You are number " + array.length + " in line.";
} // "Welcome, Ada. You are number 1 in line."

function nowServing(array){
  if (array.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var servingNow = array[0];
    array.shift();
    return "Currently serving "+servingNow+"."
  }
} // "Currently serving Ada."

function currentLine(array){
  var lineCurrent = ""
  for (var i = 0; i < array.length; i++) {
    if (lineCurrent === "") {
      lineCurrent = ": "+(i+1)+". " + array[i];
    } else {
      lineCurrent = lineCurrent + ", " + (i+1) +". "+ array[i];
    }
  }
  if (array.length === 0) {
    lineCurrent = " empty."
  }
  return "The line is currently" + lineCurrent;
} // "The line is currently: 1. Grace, 2. Kent"

takeANumber(katzDeliLine, "Matz"); // "3"

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"

nowServing(katzDeliLine); // "Currently serving Grace."

currentLine(katzDeliLine); // "The line is currently: 1. Kent, 2. Matz"
