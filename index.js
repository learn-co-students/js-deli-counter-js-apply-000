function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}
// used interpolation insted of concatenation becuase it looks cleaner. tried using a for loop but the number kept starting at 0

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else { return `Currently serving ${line.shift()}.` } }
  
  // else was not working because i wasnt using return with it. 
  
  function currentLine(line) {
    if (line.length === 0) {
      return "The line is currently empty."}
      var newLine = []
      for (var i = 0; i < line.length; i++) {
        newLine.push(`${i + 1}. ${line[i]}`) }
   return `The line is currently: ${newLine.join(', ')}`
      } 
        /* tried .toString, tried if, else if, and else - didnt work. */