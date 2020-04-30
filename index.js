function takeANumber(line, name){
  line.push(name)
  const position = line.length
  return "Welcome, " + name + ". You are number " + position + " in line." 
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length < 1){
    return "There is nobody waiting to be served!"
  } else {
    const first = katzDeliLine.shift();
    return "Currently serving " + first + "."
  }
}

function currentLine(line){
  if (line.length < 1){
    return "The line is currently empty."
  } else {
    const positions = []
      for (let i = 0; i < line.length; i++){
        const place = i + 1;
        const person = place.toString() + ". " + line[i]
        positions.push(person)
    } 
    return "The line is currently: " + positions.join(", ");
  }
}