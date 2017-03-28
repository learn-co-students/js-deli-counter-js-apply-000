
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return ("Welcome, " + name + ". You are number " + (katzDeliLine.length) + " in line.")
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length>0) {return ("Currently serving " + katzDeliLine.shift()) + "."}
  else if (katzDeliLine.length===0){return ("There is nobody waiting to be served!")}
}

function currentLine(katzDeliLine) {
  var output="The line is currently"

  if (katzDeliLine.length===0) {
  return (output + " empty.")
}
else { output += ": "
  for (var i=0; i<katzDeliLine.length; i++) {
  output +=  (i+1 + ". " + katzDeliLine[i] + ", ")
} return output.slice(0,output.length-2)
}
}
