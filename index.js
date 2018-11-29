function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
  let currentName = katzDeliLine[0];
  katzDeliLine.splice(0,1);
  return "Currently serving " + currentName + ".";
}
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    let array = [ ];
    for (let i = 0; i < katzDeliLine.length; i++){
    array.push((i + 1) + ". " + katzDeliLine[i]);
  }
  return "The line is currently: " + array.join(", ");
}
}