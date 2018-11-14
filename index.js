var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
katzDeliLine.push(name)
//return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(a) {
  if (a.length === 0) {
    return "There is nobody waiting to be served!"
    }
  else {
    var name = a[0];  // who is at index 0?
    a.splice(0,1)  // removes the fist person in the line at index 0
    // return "Currently/Now serving " + name + ".";
    return `Currently serving ${name}.`;
    }
}

function currentLine(b) {
  var line = []
  if (b.length === 0) {
    return "The line is currently empty."
    }
  else {
         for(var i=0; i<b.length; i++) {
         line += (i+1) + ". " +b[i] + ", "
         }
         line = line.slice(0, line.length-2)
    // return "The line is currently: " + currentLine
    return `The line is currently: ${line}`;
  }
}
