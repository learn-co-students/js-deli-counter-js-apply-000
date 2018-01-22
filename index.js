var katzDeli =[];

function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
};

function nowServing(line) {
  // if(!line.length)
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${line.shift()}.`
};

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  var string = "The line is currently: "
  for (var i = 0; i < line.length; i++) {
    string += `${i + 1}. ${line[i]}`
    if (line.length - 1 !== i) {
      string += ", "
    }
    // if this index num is the LAST index num, DON'T add that comma
    // string += `${i + 1}. ${line[i]}, `
  }
  return string;
};
