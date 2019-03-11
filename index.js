

function takeANumber(que, name) {
  var n;
  que.push(name);
  n = que.length;
  return `Welcome, ${name}. You are number ${n} in line.`;
}

function nowServing(que) {
  if (que.length === 0) {
    return "There is nobody waiting to be served!";
  }
  var s = que[0];
  que.shift();
  return "Currently serving " + s + ".";
}

function currentLine(que) {
  if (que.length === 0) {
    return "The line is currently empty.";
  }
  var s = "The line is currently: ";
  for (var i = 0; i<que.length; ++i) {
    if (i) s += ', ';
    s += (i+1) + '. ' + que[i];
  }
  return s;
}
