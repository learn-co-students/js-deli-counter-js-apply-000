function takeANumber (line, name) {
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
}

function nowServing (line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + line.shift() + ".";
  }
}

function currentLine (line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    var report = "The line is currently:";
    for (let i = 0; i < line.length; i++) {
      report = report + " " + (i + 1) + ". " + line[i] + ",";
    }
    return report.slice(0, -1);
  }
}