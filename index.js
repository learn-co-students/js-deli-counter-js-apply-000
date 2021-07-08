function takeANumber (line, name) {
  // body...
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
}

function nowServing (line) {
  // body...
  if (line.length <= 0) {
  return "There is nobody waiting to be served!";
  }
  else {
    return "Currently serving " + line.shift() + ".";
  }
}

function currentLine (line) {
  // body...
  if (line.length <= 0) {
    return "The line is currently empty.";
  }
  else {
    var placeHolder = [];
    line.forEach(function (name, index) {
      // body...
      var num = index++;
      placeHolder.push(` ${num + 1}. ${name}`); 
    });
    return "The line is currently:" + placeHolder;
  }
}