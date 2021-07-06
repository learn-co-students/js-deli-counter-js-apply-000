function takeANumber(cur, name) {
  Array.isArray(name) ? name.forEach(x => cur.push(x)) : cur.push(name);
  return `Welcome, ${name}. You are number ${cur.length} in line.`;
}

function nowServing(cur) {
  return cur.length > 0 ? `Currently serving ${cur.splice(0, 1)}.` : "There is nobody waiting to be served!";
}

function currentLine(cur) {
  let str = "The line is currently: "
  if(cur.length > 0) {
    for(let i = 0; i < cur.length; i++) {
      str += i < cur.length - 1 ? `${i + 1}. ${cur[i]}, ` : `${i + 1}. ${cur[i]}`;
    }
    return str;
  }
  return "The line is currently empty.";
}