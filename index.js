var katzDeli = [];

function takeANumber(line, name) {
  var l = line.length + 1;
  line.push(name) 
  
  var msg = "Welcome, " + name + ". You are number " + l + " in line."
  
  return msg
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."  
  }
  
  var rtn = "The line is currently:"
  
  line.forEach(function(e, idx) {
    rtn = rtn + " " + (idx + 1) + ". " + e + ","
  });
  
  var l = rtn.length
  
  return rtn.substring(0, l - 1)
} 

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  }
  
  var n = line[0];
  line.shift()
  
  var msg = "Currently serving " + n + ".";
  return msg
}

console.log(takeANumber(katzDeli, "Chris"))
console.log(takeANumber(katzDeli, "Grace"))
console.log(currentLine(katzDeli))