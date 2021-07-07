function takeANumber(currLine, name) {
  let spot = currLine.length + 1;
  currLine.push(name);
  return "Welcome, " + name + ". You are number " + spot + " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0)
    return "There is nobody waiting to be served!";
  else {
    let current = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + current + ".";
  }
}

function currentLine(currLine) {
  let arr = [];
  if (currLine.length == 0)
    return "The line is currently empty."
  for (let i = 0; i < currLine.length; i++) {
    let j = i + 1;
    if (i == currLine.length - 1)
      arr[i] = j + ". " + currLine[i];
    else
      arr[i] = j + ". " + currLine[i] + ", ";
  }
  let sb = "The line is currently: "
  for (let i = 0; i < arr.length; i++) {
    sb += arr[i];
  }
  return sb;
}
