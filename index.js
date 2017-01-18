function takeANumber(line, name) {
  line.push(name);
  var linenum = line.indexOf(name) + 1;
  return "Welcome, " + name + ". You are number " + linenum + " in line."
}

function nowServing(deliline) {
  var res;
  if (deliline.length === 0) {
    return "There is nobody waiting to be served!";
  } else { 
    res = "Currently serving " + deliline[0] + "."; 
  }
  deliline = deliline.slice(1);
  return res;
}

function currentLine(arr) {
  var res;
  if (arr.length > 0 ) {
    arr = arr.map((name, i) => {
        return String(i+1) + '. ' + name;
    })
    console.log(arr)
    res = "The line is currently: " + arr.join(", ");
  } else {
    res = "The line is currently empty."
  }
  return res;
}