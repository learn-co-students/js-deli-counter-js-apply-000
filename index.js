function currentLine(line) {
  var status=[];
  if (!line.length) {
    return "The line is currently empty.";
  }
  for (var i=0; i<line.length; i++) {
    status.push(`${i+1}. ${line[i]}`);
  }
  return ('The line is currently: ' + status.join(", "));
  }
  function nowServing(line) {
    if (!line.length) {
      return "There is nobody waiting to be served!";
      }
      return "Currently serving " + line.shift() +".";
  }
  function takeANumber(line, name) {
    line.push(name);
    return "Welcome, "+ name +". You are number "+ line.length + " in line.";
  }
