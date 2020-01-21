let line =[];
function takeANumber(line, name) {
  
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line."
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    let name = line[0];
    line.splice(0, 1);
    return "Currently serving " + name + ".";
  }
}

