function takeANumber(arr, str) {
  arr.push(str);
  var y = arr.length;
  var x = "Welcome, " + str + ". You are number " + y + " in line.";
  return x;
}

function nowServing(arr) {
  var x;
  if (arr.length === 0) {
    x = "There is nobody waiting to be served!";
  } else {
    x = "Currently serving " + arr.shift() + "."
  }
  return x;
}

function currentLine(arr) {
  var x;
  var position;
  if (arr.length === 0) {
    x = "The line is currently empty.";
  } else {
    x = "The line is currently: ";
    for (var i = 0; i<arr.length; i++) {
      position = i+1;
      x += position + ". " + arr[i];
      if (position < arr.length) {
        x += ", ";
      }
    }
  }
return x;
}