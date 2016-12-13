var katzDeli = [];

function takeANumber (openLine, name) {
  openLine.push(name);
  return `Welcome, ${name}. You are number ${openLine.length} in line.`
}

function nowServing(openLine) {
  var serving = openLine.shift();
    if (serving === undefined) {
      return "There is nobody waiting to be served!"
    } else {
      console.log(serving)
      return `Currently serving ${serving}.`;
    }
}

function currentLine(openLine) {
  if (openLine.length === 0) {
    return "The line is currently empty."
  } else {
    var string = "The line is currently:"
    for (var i = 0, l = openLine.length; i < l; i++) {
      string = string + ` ${i + 1}` + ". " + `${openLine[i]},`
    }
    string = string.slice(0, -1);
    return string;
  }

}
