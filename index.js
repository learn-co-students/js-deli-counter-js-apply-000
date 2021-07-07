function takeANumber(line, name) {
  line.push(name) 
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length < 1) {
    return "There is nobody waiting to be served!"
  }
  
  var current = line[0]
  line.shift()
  return `Currently serving ${current}.`
}

function currentLine(line, lineStr) {
 if (line.length < 1) {
   return "The line is currently empty."
 } 
 
 var result = "The line is currently: "
 
 for (var i = 0; i < line.length; i++) {
   result += i+1 + ". " + line[i]
   
   if (i + 1 < line.length) {
     result += ", "
   }
 }
 
 return result
}