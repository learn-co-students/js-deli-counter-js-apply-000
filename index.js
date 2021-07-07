
function takeANumber(line, next) {
  line.push(next);
  return (`Welcome, ${next}. You are number ${line.length} in line.`)
}

function nowServing(line) {

while (line.length > 0) {
  var current = line[0]
  line.shift()
  return `Currently serving ${current}.`
}

if (line.length === 0){
  return "There is nobody waiting to be served!"
}
}

function currentLine(line) {
var string = "The line is currently: "

for (var i = 0; i<line.length; i++)  {
  string = string + `${i+1}. ${line[i]}, `
}

if (line.length === 0){
  return "The line is currently empty."
}
else {
  string = string.slice(0, -2);
  return string
}
}
