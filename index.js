var katzDeliLine = [];

function takeANumber(arrayName, customerName) {
  arrayName.push(customerName);
  var linePosition = arrayName.indexOf(customerName) + 1;
  return "Welcome, " + customerName + ". You are number " + linePosition + " in line."
}


function currentLine(arrayName) {
  var newStringArray = [];
  if (arrayName.length > 0) {
    for (var i=0; i<arrayName.length; i++) {
      newStringArray.push(i + 1 + ".");
      newStringArray.push(arrayName[i] + ",");
    }
    var lastElem = newStringArray[newStringArray.length - 1].slice(0, -1);
    newStringArray.pop();
    newStringArray.push(lastElem);
    return "The line is currently: " + newStringArray.join(" ");
    } else {
    return "The line is currently empty."
    }
  }


function nowServing(arrayName) {
  if (arrayName.length > 0) {
  return "Currently serving " + arrayName.shift() + ".";
} else {
  return "There is nobody waiting to be served!"
  }
}
