function takeANumber(CurrentLine,Name) {  
  CurrentLine.push(Name) 
  return ("Welcome, " + Name + "." + " You are number " + CurrentLine.length + " in line.")
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {  
    return "There is nobody waiting to be served!"
  } else if (katzDeliLine.length !== 0); 
  return "Currently serving " + katzDeliLine.shift() + "." 
}

function currentLine(Line) {
  if (Line.length === 0) {
    return "The line is currently empty."
  } 
    var katzDeliLine = []
      for(var i = 0; i < Line.length; i++)
      katzDeliLine.push(i+1 + ". " + Line[i])
    return "The line is currently: " + katzDeliLine.join(", ")
}  