function takeANumber(line, name) {
  line.push(name);

  var str = "Welcome, " + name + ". You are number " + line.length + " in line."
  return str;
}

function nowServing(line) {
  if (line.length === 0) {
    var str2 = "There is nobody waiting to be served!";
    return str2;
  } else {
    var str3 = "Currently serving " + line.shift() + ".";
    return str3;
  }
}

function currentLine(line) {
  if (line.length === 0) {
    var str4 =  "The line is currently empty.";
    return str4;
  }
  var arr = [];

  for (var i = 0; i < line.length; i++) {
    var char = line[i];
    var position = i + 1 +". " + line[i];

    arr.push(position);
  }
  var str5 = "The line is currently: " + arr.join(", ");
  return str5;
}
