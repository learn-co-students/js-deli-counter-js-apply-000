function takeANumber(line,name) {
line.push(name);
 var msg = "Welcome, "+name+". You are number "+line.length+ " in line."
  return msg
}

function nowServing(line) {
  var next = line.shift();
  var msg = "There is nobody waiting to be served!"
  if (next !== undefined) {
    msg = "Currently serving "+next+".";
  }
  return msg;
}

function currentLine(arr) {
  var msg = "The line is currently empty.";
  if (arr.length > 0) {
    var line =""
    for (var i=0; i<arr.length;i++) {
      line += i+1 + ". "+arr[i];
      if (arr[i+1] != undefined) {
        line +=", "
      }
    }
    msg = "The line is currently: "+line;
  }
  return msg;
}