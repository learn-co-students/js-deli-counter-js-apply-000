var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  return "Welcome, " + [name] + ". You are number " + [katzDeli.length] + " in line."

}

function nowServing(katzDeli) {
return katzDeli.length > 0 ? (
    "Currently serving " + [katzDeli.shift(0)] + "."
) : (
     "There is nobody waiting to be served!" );
}

function currentLine(line) {
  if (line.length == 0) {
    return "The line is currently empty."
  }
  else {
    for(let n = 0; n < line.length ; n++) {
      line[n] = ` ${n + 1}. ${line[n]}`
    }
    return `The line is currently:${line}`
  }
}

// try to create an array within the forloop?  Maybe the new array will append or edit the 1. 2. 3. into the array.
